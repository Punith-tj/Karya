import React, { useState, useEffect } from 'react';
import Card from './card';
import Table from './table.jsx';
import './Table.css';

function Input() {
    const getold = () => {
        let old;
        const oldList = localStorage.getItem("list");
        if (oldList !== null) {
            old = JSON.parse(oldList);
        } else {
            return [];
        }
        return old;
    };

    const [input, setInput] = useState("");
    const [list, setList] = useState(getold);

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    const [id, setId] = useState(0);

    const add = () => {
        if (input.trim() === "") {
            alert("Please enter a task");
        } else {
            const newTask = {
                name: input,
                id: id,
                column: "new",
                date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()
            };
            setList([...list, newTask]);
            setId(id + 1);
            setInput("");
        }
    };

    const store = (e) => {
        setInput(e.target.value);
    };

    const moveRight = (id) => {
        const newList = list.map((task) => {
            if (task.id === id) {
                if (task.column === "new") {
                    return { ...task, column: "inprogress" };
                } else if (task.column === "inprogress") {
                    return { ...task, column: "completed" };
                } else {
                    return { ...task, column: task.column };
                }
            } else {
                return { ...task, column: task.column };
            }
        });
        setList(newList);
    };

    const moveLeft = (id) => {
        const newList = list.map((task) => {
            if (task.id === id) {
                if (task.column === "completed") {
                    return { ...task, column: "inprogress" };
                } else if (task.column === "inprogress") {
                    return { ...task, column: "new" };
                } else {
                    return { ...task, column: task.column };
                }
            } else {
                return { ...task, column: task.column };
            }
        });
        setList(newList);
    };

    console.log(list);

    return (
        <div className="karya-app-container">
            {/* Ambient South Indian Temple Mandapa Banner */}
            <header className="karya-header">
                <div className="karya-brand-container">
                    <div className="karya-brand-emblem">🛕</div>
                    <div className="karya-brand-info">
                        <h1 className="karya-title">Karya</h1>
                        <span className="karya-tagline">Plan · Build · Grow</span>
                    </div>
                </div>

                <div className="karya-board-headline">
                    <h2 className="karya-board-title">My Board</h2>
                    <p className="karya-quote">“Small steps, big results.”</p>
                    <div className="karya-kolam-divider">
                        <span>❧</span> ❖ <span>❧</span>
                    </div>
                </div>

                {/* Task Input Section styled like the Top Sandstone Pill & Terracotta Button */}
                <div className="karya-input-bar">
                    <div className="karya-input-wrapper">
                        <span className="karya-search-icon">✎</span>
                        <input
                            className="karya-input-field"
                            value={input}
                            type="text"
                            placeholder="Enter new task (e.g., Complete DSA practice)..."
                            onChange={store}
                            onKeyDown={(e) => e.key === 'Enter' && add()}
                        />
                    </div>
                    <button className="karya-add-btn" onClick={add}>
                        <span className="karya-plus-sign">+</span> Add Task
                    </button>
                </div>
            </header>

            {/* Kanban Board Container */}
            <main className="karya-main-canvas">
                <Table list={list} moveright={moveRight} moveleft={moveLeft} />
            </main>

            {/* Bottom Courtyard Floor Ambiance */}
            <footer className="karya-footer">
                <div className="karya-diya-glow">🪔</div>
                <p className="karya-footer-quote">“Discipline today, a brighter tomorrow.”</p>
            </footer>
        </div>
    );
}

export default Input;