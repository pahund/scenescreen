/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 11 Jul 2016
 */
import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import styles from "./styles.css";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            spinning: false
        };
        this.bindHandlers("mouseDown", "mouseUp");
    }

    bindHandlers(...methodNames) {
        for (const methodName of methodNames) {
            this[methodName] = this[methodName].bind(this);
        }
    }

    mouseDown() {
        this.setState({ pressed: true, spinning: this.props.animate });
        if (this.props.animate) {
            setTimeout(() => this.setState({ ...this.state, spinning: false }), 500);
        }
        if (this.props.instant) {
            this.props.handle();
        }
    }

    mouseUp() {
        this.setState({ ...this.state, pressed: false });
        if (!this.props.instant) {
            this.props.handle();
        }
    }

    render() {
        const { size, active, className, icon } = this.props;
        const { pressed, spinning } = this.state;
        const wrapperClassName = classnames(
            className,
            styles.button,
            { [styles.pressed]: pressed },
            { [styles.active]: active },
            styles[size]
        );
        const iconClassName = classnames(
            "fa",
            `fa-${icon}`,
            { "fa-spin": spinning }
        );
        return (
            <div className={wrapperClassName}
                 onMouseDown={this.mouseDown}
                 onMouseUp={this.mouseUp}>
                <i className={iconClassName} />
            </div>
        );
    }
}

Button.propTypes = {
    icon: PropTypes.string.isRequired,
    instant: PropTypes.bool,
    className: PropTypes.string,
    animate: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    active: PropTypes.bool,
    handle: PropTypes.func.isRequired
};

Button.defaultProps = {
    instant: false,
    size: "medium",
    animate: false
};

export default Button;
