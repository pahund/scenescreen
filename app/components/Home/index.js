import React, { PropTypes } from "react";
import styles from "./styles.css";
import classnames from "classnames";
import range from "../../utils/range";
import Transport from "../../containers/Transport";

const Home = ({ sceneTriggered, scenes, layout, requestFileOpenDialog }) => (
    <div>
        <Transport />
        <div className={styles.container}>
            {range(0, 15).map(index => {
                const scene = scenes[index];
                const key = `scene${index}`;
                if (scene) {
                    const className = classnames(
                        styles.scene,
                        styles[`cols${layout.columns}`],
                        { [styles.selected]: scene.selected }
                    );
                    return (
                        <div className={className}
                             style={{ backgroundColor: scene.bgColor, color: scene.color }}
                             key={key}
                             onClick={() => sceneTriggered(index)}>
                            {scene.name}
                        </div>
                    );
                }
                const className = classnames(
                    styles.scene,
                    styles[`cols${layout.columns}`],
                    styles.disabled
                );
                return scenes.length ? <div key={key} className={className} /> :
                    <div key={key} className={className} onClick={requestFileOpenDialog} />;
            })}
        </div>
    </div>
);

Home.propTypes = {
    sceneTriggered: PropTypes.func.isRequired,
    requestFileOpenDialog: PropTypes.func.isRequired,
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
