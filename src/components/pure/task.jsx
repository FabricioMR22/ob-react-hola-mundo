import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Create task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /* Function that returns a Badge depending on the level */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOQUING:
                return(<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                return(<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
                break;
        }
    }

    function taskIconCompleted() {
        if(task.completed){
            return (<i className='bi-toggle-on' style={{ color:'green' }}></i>)
        }else{
            return (<i className='bi-toggle-off' style={{ color:'grey' }}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskIconCompleted()}
                <i className='bi-trash' style={{ color:'tomato' }}></i>

            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;
