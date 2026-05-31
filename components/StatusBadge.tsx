import { CompatibilityStatus } from '@/lib/types';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: CompatibilityStatus;
  showLabel?: boolean;
}

const config = {
  compatible: {
    icon: CheckCircle,
    label: 'Compatible',
    className: 'text-green-400 bg-green-400/10',
  },
  adapter: {
    icon: AlertTriangle,
    label: 'With Adapter',
    className: 'text-yellow-400 bg-yellow-400/10',
  },
  incompatible: {
    icon: XCircle,
    label: 'Incompatible',
    className: 'text-red-400 bg-red-400/10',
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
