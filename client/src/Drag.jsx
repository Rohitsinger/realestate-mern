import React from 'react'
import { useState } from 'react'
const Drag = () => {
    const initialNestedObject = {
        id: 1,
        content: 'Parent',
        children: [
          {
            id: 2,
            content: 'Child 1',
            children: [
              { id: 4, content: 'GrandChild 1' },
              { id: 5, content: 'GrandChild 2' },
            ],
          },
          {
            id: 3,
            content: 'Child 2',
            children: [
              { id: 6, content: 'GrandChild 3' },
              { id: 7, content: 'GrandChild 4' },
            ],
          },
        ],
      };
    
      const [nestedObject, setNestedObject] = useState(initialNestedObject);
    
      const onDragStart = (e, item) => {
        e.dataTransfer.setData('item', JSON.stringify(item));
      };
    
      const onDragOver = (e) => {
        e.preventDefault();
      };
    
      const onDrop = (e, parentId) => {
        e.preventDefault();
        const droppedItem = JSON.parse(e.dataTransfer.getData('item'));
        
        const updatedNestedObject = updateNestedStructure(nestedObject, parentId, droppedItem);
        setNestedObject({ ...updatedNestedObject });
      };
    
      const updateNestedStructure = (obj, parentId, droppedItem) => {
        if (obj.id === parentId) {
          return {
            ...obj,
            children: obj.children ? [...obj.children, droppedItem] : [droppedItem],
          };
        } else if (obj.children) {
          return {
            ...obj,
            children: obj.children.map((child) => updateNestedStructure(child, parentId, droppedItem)),
          };
        }
        return obj;
      };
    
      const renderNested = (obj) => {
        return (
          <div
            key={obj.id}
            onDragStart={(e) => onDragStart(e, obj)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, obj.id)}
            draggable
            style={{ border: '1px solid black', margin: '4px', padding: '4px' }}
          >
            {obj.content}
            {obj.children &&
              obj.children.map((child) => {
                return renderNested(child);
              })}
          </div>
        );
      };
    
      return <div>{renderNested(nestedObject)}</div>;
    };
    
    
    
    
   

export default Drag
