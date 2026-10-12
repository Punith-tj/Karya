import React from 'react';
import './Table.css';

function card(props) {
    console.log(props);
    return (
        <div className="karya-card" id={`task-${props.id}`}>
            {/* Card Content Header */}
            <div className="karya-card-header">
                <span className="karya-card-bullet" aria-hidden="true"></span>
                <h5 className="karya-card-title" key={props.id} id={props.id}>
                    {props.name}
                </h5>
            </div>

            {/* Task Date with Calendar Icon */}
            <div className="karya-card-meta">
                <span className="karya-calendar-icon">📅</span>
                <span className="karya-card-date">{props.date}</span>
            </div>

            {/* Carved Bronze Navigation Action Buttons */}
            <div className="karya-card-actions">
                <button 
                    className="karya-nav-btn karya-nav-left"
                    onClick={() => props.moveleft(props.id)}
                    title="Move back"
                    aria-label="Move task left"
                >
                    &larr;
                </button>
                <button 
                    className="karya-nav-btn karya-nav-right"
                    onClick={() => props.moveright(props.id)}
                    title="Move forward"
                    aria-label="Move task right"
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
}

export default card;