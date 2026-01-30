import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const ERickshawIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect
      x="8"
      y="16"
      width="24"
      height="14"
      rx="2"
      fill="#3B82F6"
      fillOpacity="0.2"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <path
      d="M10 16V12C10 10.8954 10.8954 10 12 10H28C29.1046 10 30 10.8954 30 12V16"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M32 20H38C39.1046 20 40 20.8954 40 22V28"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="14"
      cy="34"
      r="5"
      fill="white"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <circle cx="14" cy="34" r="2" fill="#3B82F6" />
    <circle
      cx="26"
      cy="34"
      r="5"
      fill="white"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <circle cx="26" cy="34" r="2" fill="#3B82F6" />
    <circle
      cx="40"
      cy="32"
      r="4"
      fill="white"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <rect x="16" y="20" width="8" height="6" rx="1" fill="#3B82F6" />
    <rect x="24" y="22" width="2" height="2" fill="#3B82F6" />
  </svg>
);

const ELoaderIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect
      x="4"
      y="14"
      width="26"
      height="16"
      rx="2"
      fill="#3B82F6"
      fillOpacity="0.2"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <path
      d="M8 20H26M8 26H26"
      stroke="#3B82F6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M30 18H38C40.2091 18 42 19.7909 42 22V30H30V18Z"
      fill="#3B82F6"
      fillOpacity="0.3"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <rect
      x="33"
      y="21"
      width="6"
      height="5"
      rx="1"
      fill="white"
      stroke="#3B82F6"
      strokeWidth="1"
    />
    <circle
      cx="12"
      cy="34"
      r="5"
      fill="white"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <circle cx="12" cy="34" r="2" fill="#3B82F6" />
    <circle
      cx="38"
      cy="34"
      r="5"
      fill="white"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <circle cx="38" cy="34" r="2" fill="#3B82F6" />
    <rect x="14" y="18" width="6" height="4" rx="1" fill="#3B82F6" />
    <rect x="20" y="19" width="1.5" height="2" fill="#3B82F6" />
  </svg>
);

const EBikeIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle
      cx="12"
      cy="32"
      r="7"
      fill="white"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="32"
      r="3"
      fill="#3B82F6"
      fillOpacity="0.3"
      stroke="#3B82F6"
      strokeWidth="1"
    />
    <circle
      cx="36"
      cy="32"
      r="7"
      fill="white"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <circle
      cx="36"
      cy="32"
      r="3"
      fill="#3B82F6"
      fillOpacity="0.3"
      stroke="#3B82F6"
      strokeWidth="1"
    />
    <path
      d="M12 32L20 20L32 20L36 32"
      stroke="#3B82F6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 20L24 32L32 20"
      stroke="#3B82F6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 18H24"
      stroke="#3B82F6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 20V14"
      stroke="#3B82F6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M29 12H35"
      stroke="#3B82F6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect x="21" y="23" width="6" height="4" rx="1" fill="#3B82F6" />
    <path
      d="M23 24.5L24.5 24L23.5 25.5L25 25"
      stroke="white"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OtherIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect
      x="10"
      y="14"
      width="28"
      height="22"
      rx="3"
      fill="#3B82F6"
      fillOpacity="0.2"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <rect x="18" y="10" width="12" height="4" rx="1" fill="#3B82F6" />
    <path
      d="M24 20V28M20 24H28"
      stroke="#3B82F6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="16" cy="32" r="2" fill="#3B82F6" />
    <circle cx="24" cy="32" r="2" fill="#3B82F6" />
    <circle cx="32" cy="32" r="2" fill="#3B82F6" fillOpacity="0.4" />
    <circle
      cx="38"
      cy="10"
      r="6"
      fill="#3B82F6"
      fillOpacity="0.2"
      stroke="#3B82F6"
      strokeWidth="1.5"
    />
    <path
      d="M36 8.5C36 7.5 36.8 7 38 7C39.2 7 40 7.8 40 8.8C40 9.8 39 10 38 11V12"
      stroke="#3B82F6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="38" cy="13.5" r="0.75" fill="#3B82F6" />
  </svg>
);

const CheckIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className} {...props}>
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const SuccessIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={className}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const SpinnerIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ExternalLinkIcon,
  ERickshawIcon,
  ELoaderIcon,
  EBikeIcon,
  OtherIcon,
  CheckIcon,
  SuccessIcon,
  SpinnerIcon,
};
