module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'componentType',
        message: 'what type is your component?',
        choices: ['components', 'pages', 'components/articles', 'components/comments'],
      },
      {
        type: 'confirm',
        name: 'hook',
        message: 'Do you want a custom hook attached to your component?',
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the component? (ex.: ApplicantCard)',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { componentName, hook, componentType } = answers;
      return { componentName, hook, componentType };
    });
  },
};
