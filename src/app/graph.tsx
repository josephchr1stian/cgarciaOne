// "use client"

// import React, { useRef, useEffect } from 'react'
// import dynamic from 'next/dynamic'
// import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';

// const data = {
//   nodes: [
//     { id: 'Node 1', group: 1 },
//     { id: 'Node 2', group: 1 },
//     { id: 'Node 3', group: 1 },
//     { id: 'Node 4', group: 2 },
//     { id: 'Node 5', group: 2 },
//     { id: 'Node 6', group: 3 },
//     { id: 'Node 7', group: 3 },
//     { id: 'Node 8', group: 3 },
//   ],
//   links: [
//     { source: 'Node 1', target: 'Node 2' },
//     { source: 'Node 1', target: 'Node 3' },
//     { source: 'Node 2', target: 'Node 4' },
//     { source: 'Node 3', target: 'Node 5' },
//     { source: 'Node 4', target: 'Node 6' },
//     { source: 'Node 5', target: 'Node 7' },
//     { source: 'Node 6', target: 'Node 8' },
//     { source: 'Node 7', target: 'Node 8' },
//   ]
// }

// export default function Graph() {
//   const fgRef = useRef()

//   useEffect(() => {
//     const fg = fgRef.current
//     if (fg) {
//       // fg.d3Force('charge').strength(-120)
//     }
//   }, [])

//   return (
//     <div className="w-full h-[600px] bg-background">
//       <ForceGraph3D
//         ref={fgRef}
//         graphData={data}
//         nodeAutoColorBy="group"
//         nodeLabel="id"
//         linkColor={() => 'rgba(255,255,255,0.2)'}
//         backgroundColor="rgba(0,0,0,0)"
//         enableNodeDrag={false}
//         enableNavigationControls={true}
//         showNavInfo={true}
//       />
//     </div>
//   )
// }