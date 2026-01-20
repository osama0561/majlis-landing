import React from 'react';

export interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  className?: string;
}

const LoadingSpinner: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <svg
      className={`animate-spin ${sizeClasses[size]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
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
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'start',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  ariaLabel,
  className = '',
}) => {
  const isDisabled = disabled || loading;

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: `
      bg-amber-500 text-forest-800
      hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5
      focus:ring-amber-500
      disabled:bg-amber-300 disabled:text-forest-600 disabled:hover:shadow-none disabled:hover:translate-y-0
      dark:bg-amber-500 dark:text-forest-800 dark:hover:bg-amber-400
    `,
    secondary: `
      bg-terracotta-500 text-cream-50
      hover:bg-terracotta-400 hover:shadow-lg hover:shadow-terracotta-500/30 hover:-translate-y-0.5
      focus:ring-terracotta-500
      disabled:bg-terracotta-300 disabled:hover:shadow-none disabled:hover:translate-y-0
      dark:bg-terracotta-400 dark:hover:bg-terracotta-300
    `,
    outline: `
      border-2 border-forest-600 text-forest-600 bg-transparent
      hover:bg-forest-600 hover:text-cream-50 hover:-translate-y-0.5
      focus:ring-forest-600
      disabled:border-forest-300 disabled:text-forest-300 disabled:hover:bg-transparent disabled:hover:translate-y-0
      dark:border-cream-100 dark:text-cream-100 dark:hover:bg-cream-100 dark:hover:text-forest-800
    `,
  };

  const widthClasses = fullWidth ? 'w-full' : '';

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <LoadingSpinner size={size} />
          <span>جاري التحميل...</span>
        </>
      );
    }

    return (
      <>
        {icon && iconPosition === 'start' && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'end' && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
      </>
    );
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading}
      aria-disabled={isDisabled}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${widthClasses}
        ${className}
      `.trim()}
    >
      {renderContent()}
    </button>
  );
};

export default PrimaryButton;
