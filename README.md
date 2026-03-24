<p align="center">
  <img src="assets/Knowage-light.svg" alt="Knowage" width="300"/>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/AGPL-3.0"><img src="https://img.shields.io/github/license/KnowageLabs/Knowage-Server.svg" alt="License: AGPL"/></a>
  <a href="https://hub.docker.com/r/knowagelabs/knowage-server-docker/"><img src="https://img.shields.io/docker/pulls/knowagelabs/knowage-server-docker.svg" alt="Docker Pulls"/></a>
  <a href="https://knowage.rtfd.io/"><img src="https://img.shields.io/readthedocs/knowage.svg" alt="Documentation"/></a>
</p>

<p align="center">
  <a href="http://knowage-suite.readthedocs.io/">📚 Docs</a> ·
  <a href="https://www.knowage-suite.com/site/home/">🌐 Website</a> ·
  <a href="https://hub.docker.com/r/knowagelabs/knowage-server-docker/">🐳 Docker Hub</a> ·
  <a href="https://github.com/KnowageLabs/Knowage-Server/blob/master/ROADMAP.md">🗺️ Roadmap</a>
</p>

---

**Knowage** is an open-source analytics and business intelligence suite designed to integrate traditional and big/cloud data sources, transforming them into valuable insights. Its features — data federation, mash-up, data/text mining, and advanced visualization — provide comprehensive support for rich, multi-source data analysis.

## Features

| Feature | Description | EE |
| --- | --- | :---: |
| **Online Dashboard** | Interactive tool for visualizing data from multiple datasets | |
| **Reporting** | Create, customize, and distribute interactive reports from diverse sources | |
| **OLAP** | Drill-down, slice-and-dice, and pivot operations for multidimensional analysis | |
| **KPI** | Define, monitor, and visualize key performance indicators | |
| **Python Integration** | Execute scripts and embed custom algorithms within the BI environment | |
| **Virtual Assistant** | AI-powered assistant (EngGpt) for guided analysis and navigation | ✅ |
| **Data Preparation** | Clean, transform, and enrich raw data for analytics | ✅ |
| **Dossier** | Combine multiple reports into a single interactive view | ✅ |

## Editions

| Edition | Description |
| --- | --- |
| **Community (CE)** | Full analytical capabilities, open source, part of [OW2](https://www.ow2.org) |
| **Enterprise (EE)** | Commercial offering by [Engineering Group](https://www.eng.it) with additional features and dedicated support |

This repository contains the source code of the **Community Edition**.

## Quick Start

The fastest way to run Knowage is via Docker:

```bash
git clone https://github.com/KnowageLabs/Knowage-Docker.git
cd Knowage-Docker
docker compose up
```

For full installation and configuration instructions, see the [Installation & Administration Manual](http://knowage-suite.readthedocs.io/).

## Contributing

Knowage is open to external contributions. Before opening a pull request:

- This project follows a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md)
- You must sign the [Individual Contributor License Agreement](./CLA.md) by commenting _"I have read the CLA Document and I hereby sign the CLA"_ on your PR
- Ensure all tests pass before submitting

Issues and feature requests are tracked in [KnowageLabs/Knowage](https://github.com/KnowageLabs/Knowage/issues).

## Building from Source

### Prerequisites

| Tool | Required version |
| --- | --- |
| JDK | 17 (LTS) |
| Maven | 3.x |
| Node.js | ≥ 22 |
| Grunt CLI | latest (global) |

> **Note:** The Java version is pinned to 17 in `pom.xml` — not 11, not 21.

Install Grunt CLI globally:

```bash
npm install -g grunt-cli
```

Quick check:

```bash
java -version    # openjdk 17.x.x
mvn -version     # Apache Maven 3.x.x
node -version    # v22.x.x or higher
grunt --version  # grunt-cli v...
```

### Build

```bash
git clone https://github.com/KnowageLabs/Knowage-Server.git
cd Knowage-Server/knowage-ce-parent
mvn clean install
```

### Output

WAR files are generated under `knowage-ce-parent/`:

| Module | Path |
| --- | --- |
| Core | `knowage/target/knowage.war` |
| API | `knowage-api/target/knowage-api.war` |
| Vue frontend | `knowage-vue/target/knowage-vue.war` |
| BIRT engine | `knowagebirtreportengine/target/knowagebirtreportengine.war` |
| Cockpit engine | `knowagecockpitengine/target/knowagecockpitengine.war` |
| Jasper engine | `knowagejasperreportengine/target/knowagejasperreportengine.war` |
| KPI engine | `knowagekpiengine/target/knowagekpiengine.war` |
| Meta | `knowagemeta/target/knowagemeta.war` |
| QBE engine | `knowageqbeengine/target/knowageqbeengine.war` |
| Talend engine | `knowagetalendengine/target/knowagetalendengine.war` |

### Deploy

Deploy the WAR files to an **Apache Tomcat** instance configured with a metadata database (MySQL/MariaDB or PostgreSQL). Database DDL scripts are under `knowagedatabasescripts/<dbms>/`. See the [manual installation guide](https://knowage-suite.readthedocs.io/en/master/installation-guide/manual-installation.html) for details.

### Python Module

No build needed — run the `Knowage-Python` module directly as a standalone program. See the [Python installation guide](https://knowage-suite.readthedocs.io/en/master/installation-guide/python-installation.html).

## License

[AGPL v3](LICENSE) © 2026 Engineering Ingegneria Informatica S.p.A.