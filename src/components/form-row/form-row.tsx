import styles from './form-row.module.scss';
import classNames from 'classnames';

export interface FormRowProps {
    className?: string;
    children?: JSX.Element|Array<JSX.Element|string>|string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-form-rows-and-templates
 */
export const FormRow = ({ className, children }: FormRowProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
