/* eslint-disable @typescript-eslint/naming-convention */
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

interface EventProps {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const pageview = (url: string) => {
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: EventProps) => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
