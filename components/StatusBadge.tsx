import { CompatibilityStatus } from '@/lib/types';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: CompatibilityStatus;
  showLabel?: boolean;
}

const config = {
  compatible: {
    icon: CheckCircle,
    label: 'Kompatibel',
    className: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-400/10',
  },
  adapter: {
    icon: AlertTriangle,
    label: 'Mit Adapter',
    className: 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-400/10',
  },
  incompatible: {
    icon: XCircle,
    label: 'Inkompatibel',
    className: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-400/10',
  },
};

export default function StatusBadge({ status, showLabel = true }: StatusBadgeProps) {
  const { icon: Icon, label, className } = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
      <Icon className="h-3.5 w-3.5" />
      {showLabel && <span>{label}</span>}
    </span>
  );
}
