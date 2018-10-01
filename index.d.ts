// Type definitions for react-vertical-timeline-component 2.0.5
// Project: https://github.com/stephane-monnot/react-vertical-timeline
// Definitions by: Simone Fonda <fonda@spaziodati.eu>
// TypeScript Version: 2.6

import * as React from 'react';


export interface VerticalTimelineProps extends React.Props<VerticalTimeline> {
    animate?: boolean;
    className?: string;
    layout?: string;
}

export interface VerticalTimelineElementProps extends React.Props<VerticalTimelineElement> {
    className?: string;
    date?: string;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    position?: string;
}

export class VerticalTimeline extends React.Component<VerticalTimelineProps> { }
export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> { }
