export const table = () => ({
  name: 'table',
  displayName: 'Table Style',
  help: 'Set styling for a Table element',
  modelArgs: [],
  args: [{
    name: 'font',
    displayName: 'Text settings',
    help: 'Fonts, alignment and color',
    argType: 'font',
  }, {
    name: 'perPage',
    displayName: 'Rows per page',
    help: 'Number of rows to display per table page.',
    argType: 'select',
    default: 10,
    options: {
      choices: ['', 5, 10, 25, 50, 100].map(v => ({ name: v, value: v })),
    },
  }, {
    name: 'paginate',
    displayName: 'Pagination',
    help: 'Show or hide pagination controls. If disabled only the first page will be shown.',
    argType: 'checkbox',
    default: true,
  }],
});
