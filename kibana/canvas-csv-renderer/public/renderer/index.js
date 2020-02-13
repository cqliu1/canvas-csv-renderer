import ReactDOM from 'react-dom';
import React from 'react';
import { Csv } from './component';

export const csv = () => ({
  name: 'csv',
  displayName: 'CSV Format',
  help: 'Render a datatable in CSV format',
  reuseDomNode: true,
  render(domNode, config, handlers) {
    const { datatable } = config;

    if (!datatable) {
      return;
    }

    const renderCSV = () => {
      const { offsetHeight: height, offsetWidth: width } = domNode;
      return <Csv {...{ datatable, height, width }} />;
    };

    ReactDOM.render(renderCSV(), domNode, () => handlers.done());

    handlers.onResize(() => {
      ReactDOM.render(renderCSV(), domNode, () => handlers.done());
    });

    handlers.onDestroy(() => ReactDOM.unmountComponentAtNode(domNode));
  },
});
