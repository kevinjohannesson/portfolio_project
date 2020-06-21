

type Task = 'task-1' | 'task-2' | 'task-3' | 'task-4';
type I_Column = 'column-1' | 'column-2' | 'column-3';
interface InitialData {
  tasks: {
    [key: string]: { id: Task, content: string}
  },
  columns: {
    [key: string]: { id: I_Column, title: string, taskIds: Task[]}
  },
  columnOrder: I_Column[]
}
export const initialData: InitialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favourite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: []
    }
  },
  columnOrder: ['column-1']
};









// const [state, set_state] = useState(initialData);
  
// const handleDragEnd = useCallback( (result) => {
//   console.log('hallo')
//   const {destination, source, draggableId } = result;

//   if(!destination){
//     return;
//   }

//   if (
//     destination.droppableId === source.droppableId &&
//     destination.index === source.index
//   ) return;

//   const start = state.columns[source.droppableId];
//   const finish = state.columns[destination.droppableId];
  
//   if (start === finish) {
//     const newTaskIds = Array.from(start.taskIds);

//     newTaskIds.splice(source.index, 1);
//     newTaskIds.splice(destination.index, 0, draggableId);

//     const newColumn = { 
//       ...start, 
//       taskIds: newTaskIds
//     }

//     set_state({
//       ...state,
//       columns: {
//         ...state.columns,
//         [newColumn.id]: newColumn,
//       }
//     })
//   }

//   else {
//     const startTaskIds = Array.from(start.taskIds);
//     startTaskIds.splice(source.index, 1);
//     const newStart = {
//       ...start,
//       taskIds: startTaskIds
//     }

//     const finishTaskIds = Array.from(finish.taskIds);
//     finishTaskIds.splice(destination.index, 0, draggableId);

//     const newFinish = {
//       ...finish,
//       taskIds: finishTaskIds
//     }

//     set_state({
//       ...state,
//       columns: {
//         ...state.columns,
//         [newStart.id]: newStart,
//         [newFinish.id]: newFinish,
//       }
//     })

//   }

  


// }, [state])


// {/* <DragDropContext
//           onDragEnd={handleDragEnd}
//        > */}
//        {state.columnOrder.map((columnId)=> {
//         const column =  state.columns[columnId];
//         const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
//         return <Row key={column.id} column={column} tasks={tasks} />
//       })}
//       {/* </DragDropContext> */}
