'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the cat\'s pajamas ${chalk.red('generator-vue-tmp-zjs')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name?',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      console.log('props', props)
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**'),
      this.destinationPath('./'),
      {name: this.props.name}
    );
  }

  install() {
    // this.installDependencies();
  }
};
