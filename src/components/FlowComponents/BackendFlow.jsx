import React from 'react';
import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 50, y: 0 }, data: { label: <h2 style={{ color: 'white', textAlign: 'center' }}>Back-End Development</h2> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: 'orange' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: <h4 style={{ color: 'green' }}>Spring Boot</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#cae8c3' } },
    { id: '3', position: { x: 100, y: 150 }, data: { label: <h4 style={{ color: '#062603' }}>Django</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#e1ffe0' } },
    { id: '4', position: { x: 0, y: 200 }, data: { label: <h4 style={{ color: 'purple' }}>Php</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#e9d4fd' } },
    { id: '5', position: { x: 100, y: 250 }, data: { label: <h4 style={{ color: '#3095d4' }}>Java</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#e0ecff' } },
    { id: '6', position: { x: 0, y: 300 }, data: { label: <h4 style={{ color: '#a89121' }}>Python</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#f5e69c' } },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e1-4', source: '1', target: '4', animated: true },
    { id: 'e1-5', source: '1', target: '5', animated: true },
    { id: 'e1-6', source: '1', target: '6', animated: true },
];

const styles = {
    background: 'transparent',
    borderBottomRightRadius:'120px',
};

const BackendFlow = () => {
    return (
        <div style={{ width: '300px', height: '340px' }}>
            <ReactFlow style={styles} nodes={initialNodes} edges={initialEdges} />
        </div>
    );
};

export default BackendFlow;