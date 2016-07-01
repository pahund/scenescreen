import React, { PropTypes } from "react";
import styles from "./styles.css";

const Home = ({ sceneTriggered, scenes }) => (
    <div>
        <div className={styles.container}>
            {scenes.map((scene, index) => (
                <div className={styles.scene}
                     style={{ backgroundColor: scene.color }}
                     key={`scene${index}`}
                     onClick={() => sceneTriggered(index)}>
                    {scene.name}
                </div>
            ))}
        </div>
    </div>
);

Home.propTypes = {
    sceneTriggered: PropTypes.func.isRequired,
    scenes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            messages: PropTypes.arrayOf(
                PropTypes.arrayOf(PropTypes.number)
            ).isRequired
        })
    ).isRequired
};

export default Home;
