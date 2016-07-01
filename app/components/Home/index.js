import React, { PropTypes } from "react";
import styles from "./styles.css";
import classnames from "classnames";

const Home = ({ sceneTriggered, scenes, layout }) => {
    return (
        <div>
            <div className={styles.container}>
                {scenes.map((scene, index) => (
                    <div className={classnames(
                            styles.scene,
                            styles[`cols${layout.columns}`],
                            { [styles.selected]: scene.selected }
                         )}
                         style={{ backgroundColor: scene.bgColor, color: scene.color }}
                         key={`scene${index}`}
                         onClick={() => sceneTriggered(index)}>
                        {scene.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

function calculateCols() {
    return window.matchMedia("(max-width: 300px)").matches ? 1 :
        window.matchMedia("(max-width: 600px)").matches ? 2 :
        window.matchMedia("(max-width: 1200px)").matches ? 4 : 8;
}

Home.propTypes = {
    sceneTriggered: PropTypes.func.isRequired,
    scenes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            selected: PropTypes.bool,
            color: PropTypes.string.isRequired,
            bgColor: PropTypes.string.isRequired,
            messages: PropTypes.arrayOf(
                PropTypes.arrayOf(PropTypes.number)
            ).isRequired
        })
    ).isRequired,
    layout: PropTypes.shape({
        columns: PropTypes.number.isRequired
    }).isRequired
};

export default Home;
