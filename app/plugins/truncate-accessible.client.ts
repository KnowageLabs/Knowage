// Adds accessible labels to truncated text elements so screen readers can access the full content
// Runs only in client

function isTruncated(el: Element): boolean {
  const style = getComputedStyle(el as HTMLElement)
  const hasEllipsis = style.textOverflow === 'ellipsis' || style.overflow === 'hidden'
  const hasClamp = Array.from(el.classList).some(c => c.includes('line-clamp'))
  // If the element's scroll width is bigger than its client width, it's visually truncated
  const rect = el as HTMLElement
  const overflowTruncated = rect.scrollWidth > rect.clientWidth
  return hasEllipsis || hasClamp || overflowTruncated
}

function makeAccessible(el: Element) {
  const node = el as HTMLElement
  const text = node.innerText?.trim()
  if (!text) return
  // Prefer to not override existing attributes
  if (!node.getAttribute('title')) node.setAttribute('title', text)
  if (!node.getAttribute('aria-label')) node.setAttribute('aria-label', text)
}

function scanAndFix(root: ParentNode = document) {
  try {
    // Select likely truncated elements only: Tailwind utilities like 'truncate' or 'line-clamp'
    const candidates = Array.from((root as Element).querySelectorAll('[class*="truncate"], [class*="line-clamp"]')) as Element[]
    for (const el of candidates) {
      try {
        if (isTruncated(el)) makeAccessible(el)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        // ignore per-element errors
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    // ignore
  }
}

export default function () {
  if (typeof window === 'undefined' || !document) return

  // Run after a short delay to allow content to render
  const run = () => scanAndFix(document)
  setTimeout(run, 300)

  // Observe DOM mutations to catch dynamic content (e.g., components rendering later)
  const mo = new MutationObserver(() => {
    // throttle/debounce small batches
    scanAndFix(document)
  })
  mo.observe(document.body, { childList: true, subtree: true, characterData: true })

  // Also re-run on window resize because truncation can change
  let resizeTimer: number | undefined
  window.addEventListener('resize', () => {
    if (resizeTimer) window.clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(() => scanAndFix(document), 200)
  })
}
