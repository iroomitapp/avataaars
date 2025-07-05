import * as React from 'react';
import Option from './Option';
import { OptionContextClass } from './OptionContext';
export interface Props {
    option: Option;
    defaultOption: React.ComponentClass | string;
}
export default class Selector extends React.Component<Props & {
    children?: React.ReactNode;
}> {
    private optionContext;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props & {
        children?: React.ReactNode;
    }): void;
    componentWillUnmount(): void;
    render(): null;
    private optionContextUpdate;
    private updateOptionValues;
    static contextType: React.Context<OptionContextClass | null>;
}
