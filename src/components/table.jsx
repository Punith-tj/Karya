import Card from './card.jsx';
import './Table.css';

function Table(props) {
    const list = props.list;
    
    // Counts for column badges
    const newCount = list.filter((task) => task.column === "new").length;
    const inProgressCount = list.filter((task) => task.column === "inprogress").length;
    const completedCount = list.filter((task) => task.column === "completed").length;

    return (
        <div className="karya-board-wrapper">
            <table className="tab">
                <thead>
                    <tr className="karya-column-header-row">
                        {/* COLUMN 1: NEW (Gopuram Arch) */}
                        <th className="karya-th karya-th-new">
                            <div className="karya-column-arch arch-sandstone">
                                <div className="karya-bell-hanging bell-left">🔔</div>
                                <div className="karya-arch-content">
                                    {/* Carved Gopuram Temple Tower SVG */}
                                    <svg className="karya-motif-svg" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                                        <path d="M24 3L21 8H27L24 3Z" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M18 8H30V14H18V8Z" strokeWidth="2"/>
                                        <path d="M15 14H33V22H15V14Z" strokeWidth="2"/>
                                        <path d="M12 22H36V32H12V22Z" strokeWidth="2"/>
                                        <path d="M9 32H39V44H9V32Z" strokeWidth="2"/>
                                        <path d="M21 44V36H27V44" strokeWidth="2"/>
                                        <circle cx="24" cy="5.5" r="1.5" fill="currentColor"/>
                                    </svg>
                                    <span className="karya-column-title">New</span>
                                    <span className="karya-count-badge">{newCount}</span>
                                </div>
                                <div className="karya-bell-hanging bell-right">🔔</div>
                            </div>
                        </th>

                        {/* COLUMN 2: IN PROGRESS (Sculpted Deity Arch) */}
                        <th className="karya-th karya-th-progress">
                            <div className="karya-column-arch arch-patina">
                                <div className="karya-bell-hanging bell-left">🔔</div>
                                <div className="karya-arch-content">
                                    {/* Carved Deity / Mandapa Relief SVG */}
                                    <svg className="karya-motif-svg" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                                        <path d="M24 6C17 6 12 12 12 20C12 26 15 30 24 30C33 30 36 26 36 20C36 12 31 6 24 6Z" strokeWidth="1.8"/>
                                        <circle cx="24" cy="18" r="5" strokeWidth="1.8"/>
                                        <path d="M16 38C16 33 19 30 24 30C29 30 32 33 32 38V44H16V38Z" strokeWidth="1.8"/>
                                        <path d="M10 44C10 39 13 36 17 35" strokeWidth="1.8"/>
                                        <path d="M38 44C38 39 35 36 31 35" strokeWidth="1.8"/>
                                        <path d="M24 2V5M16 4L18 7M32 4L30 7" strokeWidth="1.8"/>
                                    </svg>
                                    <span className="karya-column-title">In progress</span>
                                    <span className="karya-count-badge">{inProgressCount}</span>
                                </div>
                                <div className="karya-bell-hanging bell-right">🔔</div>
                            </div>
                        </th>

                        {/* COLUMN 3: COMPLETED (Sacred Lotus Arch) */}
                        <th className="karya-th karya-th-completed">
                            <div className="karya-column-arch arch-emerald">
                                <div className="karya-bell-hanging bell-left">🔔</div>
                                <div className="karya-arch-content">
                                    {/* Sacred Lotus (Padma) Carved SVG */}
                                    <svg className="karya-motif-svg" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                                        <path d="M24 10C24 10 18 20 18 28C18 33 21 37 24 38C27 37 30 33 30 28C30 20 24 10 24 10Z" strokeWidth="1.8"/>
                                        <path d="M24 38C19 38 10 32 10 24C10 18 16 16 16 16C16 16 16 26 24 38Z" strokeWidth="1.8"/>
                                        <path d="M24 38C29 38 38 32 38 24C38 18 32 16 32 16C32 16 32 26 24 38Z" strokeWidth="1.8"/>
                                        <path d="M12 37C16 41 21 42 24 42C27 42 32 41 36 37" strokeWidth="1.8"/>
                                    </svg>
                                    <span className="karya-column-title">Completed</span>
                                    <span className="karya-count-badge">{completedCount}</span>
                                </div>
                                <div className="karya-bell-hanging bell-right">🔔</div>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="karya-column-cards-row">
                        {/* Column 1 Cards */}
                        <td className="karya-td karya-td-new">
                            <div className="karya-cards-container">
                                {list.filter((task) => task.column === "new").map((task) => (
                                    <Card 
                                        key={task.id} 
                                        moveleft={props.moveleft} 
                                        moveright={props.moveright} 
                                        id={task.id} 
                                        name={task.name} 
                                        date={task.date} 
                                    />
                                ))}
                            </div>
                        </td>

                        {/* Column 2 Cards */}
                        <td className="karya-td karya-td-progress">
                            <div className="karya-cards-container">
                                {list.filter((task) => task.column === "inprogress").map((task) => (
                                    <Card 
                                        key={task.id} 
                                        moveleft={props.moveleft} 
                                        moveright={props.moveright} 
                                        id={task.id} 
                                        name={task.name} 
                                        date={task.date} 
                                    />
                                ))}
                            </div>
                        </td>

                        {/* Column 3 Cards */}
                        <td className="karya-td karya-td-completed">
                            <div className="karya-cards-container">
                                {list.filter((task) => task.column === "completed").map((task) => (
                                    <Card 
                                        key={task.id} 
                                        moveleft={props.moveleft} 
                                        moveright={props.moveright} 
                                        id={task.id} 
                                        name={task.name} 
                                        date={task.date} 
                                    />
                                ))}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;