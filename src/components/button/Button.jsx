import styles from './Button.module.css';

function Button({
    children,
    icon: Icon = null,
    iconProps = {},
    iconPosition = 'start',
    type = 'button',
    shape = 'auto',
    appearance = 'secondary',
    direction = 'horizontal',
    bordered = false,
    iconFramed = false,
    fullWidth = false,
    disabled = false,
    className = '',
    ...props
}) {
    const hasLabel = Boolean(children);
    const hasIcon = Boolean(Icon);
    const isIconOnly = hasIcon && !hasLabel;

    const resolvedShape = shape === 'auto' ? (isIconOnly ? 'icon' : 'pill') : shape;
    
    const classNames = [
        styles["button"],
        styles[`button--${resolvedShape}`],
        styles[`button--${appearance}`],
        styles[`button--${direction}`],
        bordered ? styles["button--bordered"] : '',
        fullWidth ? styles["button--full-width"] : '',
        disabled ? styles["button--disabled"] : '',
        isIconOnly ? styles["button--icon-only"] : '',
        className
    ].filter(Boolean).join(' ');

    const iconClassNames = [
        styles["button__icon"],
        iconFramed ? styles["button__icon--framed"] : ''
    ].filter(Boolean).join(' ');

    const iconNode = hasIcon ? (
        <span className={iconClassNames}>
            <Icon
                { ...iconProps }
                className={styles["button__svg"]}
            / >
        </span>
    ) : null

    return (
        <button
            type={type}
            className={classNames}
            disabled={disabled}
            {...props}
        >
            <span className={styles["button__content"]}>
                { hasIcon && iconPosition === 'start' && iconNode }

                { hasLabel && (
                    <span className={styles["button__label"]}>
                        { children }
                    </span>
                ) }

                { hasIcon && iconPosition === 'end' && iconNode }
            </span>
        </button>
    );
}

export default Button;