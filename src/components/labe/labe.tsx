import styles from './labe.module.scss';
import classNames from 'classnames';

export interface LabelProps {
    className?: string;
    children?: JSX.Element|Array<JSX.Element|string>|string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-labes-and-templates
 */
export const Label = ({ className, children }: LabelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Label>{children}</Label>
        </div>
    );
};
