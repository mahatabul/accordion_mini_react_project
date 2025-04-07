import { useState } from "react";
import "./style.css";
import data from "./data";

function Accordion() {
    const [selected, setSelected] = useState(null);
    const [selectedList, setSelectedList] = useState([]);
    const [disable, setDisable] = useState(true);
    function handleselection(getid) {
        setSelected(getid === selected ? null : getid);
        if (!disable) {
            if (selectedList.indexOf(getid) === -1) {
                setSelectedList([...selectedList, getid]);
            } else {
                const newSelectedList = selectedList.filter((item) => item !== getid);
                setSelectedList(newSelectedList);
            }

        }

    }
    function handleEnable() {
        setDisable(!disable);
    }

    return (
        <div className="wrapper">
            <button className={`my-btn ${disable ? 'disabled' : 'enabled'}`} onClick={handleEnable}>Enable Multiselection</button>
            <div className="accordian">
                {data && data.length > 0 ? data.map((item) => (
                    <div className="cards">
                        <div onClick={() => handleselection(item.id)} className="questions"> <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            disable
                                ? (selected === item.id ? <div className="answer">{item.answer}</div> : null)
                                : (selectedList.indexOf(item.id) !== -1 ? <div className="answer">{item.answer}</div> : null)
                        }



                    </div>

                ))
                    : (<div className="no-data">No data found</div>)}
            </div>



        </div>
    )
}

export default Accordion;