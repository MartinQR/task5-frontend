import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';

function MainTable() {
  const data = [
    { id: 1, title: 'Item 1', content: 'Content for item 1' },
    { id: 2, title: 'Item 2', content: 'Content for item 2' },
    { id: 3, title: 'Item 3', content: 'Content for item 3' },
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">#</th>
            <th className="py-2">ISBN</th>
            <th className="py-2">Author(s)</th>
            <th className="py-2">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              
              <tr>
                <td className="border px-4 py-2" colSpan="4">
                  <Accordion>
                    <AccordionItem title={item.title}>
                      {item.content}
                    </AccordionItem>
                  </Accordion>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainTable;