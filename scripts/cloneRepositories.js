const { Command } = require('@oclif/command');
const logSymbols = require('log-symbols');
const { remove } = require('fs-extra');
const { promisify } = require('util');

const { exec } = require('child_process');

const execAsync = promisify(exec);

const repos = [
  'analytic-ui',
  'uikit',
  'charts',
  'header',
  'stats',
  'react-big-calendar-adapter',
  'gantt-task-react-adapter',
  'rc-tree-adapter',
  'rc-table-adapter',
  'ag-grid-adapter',
  'widgets',
  'amcharts-map-examples',
  'gpn-responses',
  'icons',
  'theme-constructor',
  'react-slick-adapter',
  'themes',
  'table',
  'echarts-adapter',
];

const clone = async (repoName) => {
  console.log(`cloning ${repoName}`);

  try {
    await execAsync(
      `git clone -b master https://github.com/consta-design-system/${repoName}.git ./repositories/${repoName}`,
    );
  } catch (err) {
    console.warn(`cloning ${repoName} failed`);
    console.error(err);
    await remove(`./repositories/${repoName}`);
    await clone(repoName);
  }
};

class GenerateCommand extends Command {
  async safeInvokeHook(hook) {
    if (hook !== undefined) {
      if (typeof hook === 'function') {
        this.log(`start executing ${hook.name}`);
        await hook();
        this.log(`finish executing ${hook.name}`);
      } else {
        this.error(`${hook.name} should be function!`);
      }
    }
  }

  async run() {
    const hrstart = process.hrtime();

    try {
      await remove('./repositories');
      await Promise.all(repos.map((item) => clone(item)));
    } catch (err) {
      this.error(err);
    }

    const hrend = process.hrtime(hrstart);

    this.log(logSymbols.success, `repositories is cloned!🔧💥`);
    this.log(`Execution time: ${hrend[0]}s`);
  }
}

GenerateCommand.description = 'Cloning repos...';

GenerateCommand.run();
