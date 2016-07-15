/**
 * getCurrentSceneIndex.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 15 Jul 2016
 */
export default scenes => {
    let currentSceneIndex = 0;
    scenes.forEach((scene, index) => {
        if (scene.selected) {
            currentSceneIndex = index;
        }
    });
    return currentSceneIndex;
};

