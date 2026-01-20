import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PrimaryButton } from './PrimaryButton';

describe('PrimaryButton', () => {
  it('renders children correctly', () => {
    render(<PrimaryButton>Click me</PrimaryButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<PrimaryButton onClick={handleClick}>Click me</PrimaryButton>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire click when disabled', () => {
    const handleClick = vi.fn();
    render(<PrimaryButton onClick={handleClick} disabled>Click me</PrimaryButton>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('does not fire click when loading', () => {
    const handleClick = vi.fn();
    render(<PrimaryButton onClick={handleClick} loading>Click me</PrimaryButton>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows loading spinner when loading', () => {
    render(<PrimaryButton loading>Click me</PrimaryButton>);
    expect(screen.getByText('جاري التحميل...')).toBeInTheDocument();
  });

  it('renders with icon at start position', () => {
    const icon = <span data-testid="test-icon">★</span>;
    render(<PrimaryButton icon={icon} iconPosition="start">With Icon</PrimaryButton>);

    const button = screen.getByRole('button');
    const iconElement = screen.getByTestId('test-icon');

    expect(button).toContainElement(iconElement);
  });

  it('renders with icon at end position', () => {
    const icon = <span data-testid="test-icon">★</span>;
    render(<PrimaryButton icon={icon} iconPosition="end">With Icon</PrimaryButton>);

    const iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('applies aria-label correctly', () => {
    render(<PrimaryButton ariaLabel="Submit form">Submit</PrimaryButton>);
    expect(screen.getByLabelText('Submit form')).toBeInTheDocument();
  });

  it('sets aria-busy when loading', () => {
    render(<PrimaryButton loading>Loading</PrimaryButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('sets aria-disabled when disabled', () => {
    render(<PrimaryButton disabled>Disabled</PrimaryButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<PrimaryButton size="sm">Small</PrimaryButton>);
    expect(screen.getByRole('button')).toHaveClass('px-4', 'py-2', 'text-sm');

    rerender(<PrimaryButton size="md">Medium</PrimaryButton>);
    expect(screen.getByRole('button')).toHaveClass('px-6', 'py-3', 'text-base');

    rerender(<PrimaryButton size="lg">Large</PrimaryButton>);
    expect(screen.getByRole('button')).toHaveClass('px-8', 'py-4', 'text-lg');
  });

  it('renders full width when specified', () => {
    render(<PrimaryButton fullWidth>Full Width</PrimaryButton>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('applies custom className', () => {
    render(<PrimaryButton className="custom-class">Custom</PrimaryButton>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('renders with correct button type', () => {
    render(<PrimaryButton type="submit">Submit</PrimaryButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
