import React from 'react';
import fileSaver from 'file-saver';
import { EuiCodeBlock, EuiButtonIcon } from '@elastic/eui';

export const Csv = ({ datatable, height, width }) => {
  const columns = datatable.columns.map(column => column.name).join(',');
  const rows = datatable.rows
    .map(row => datatable.columns.map(column => row[column.name]).join(','))
    .join('\n');
  const onClick = () => {
    const csvBlob = new Blob([columns, '\n', rows], {
      type: 'text/csv',
    });
    fileSaver.saveAs(csvBlob, `datatable.csv`);
  };

  return (
    <div className="canvasCsv" style={{ width, height, position: 'relative' }}>
      <EuiCodeBlock className="canvasCsv__code" isCopyable paddingSize="m" overflowHeight={height}>
        <pre className="canvasCsv__content">
          <p>{columns}</p>
          {rows}
        </pre>
      </EuiCodeBlock>
      <EuiButtonIcon
        {...{ onClick }}
        className="canvasCsv__button"
        iconType="exportAction"
        color="text"
      />
    </div>
  );
};
