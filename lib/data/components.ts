import { Component } from '../types';

const affiliateUrl = (model: string) =>
  `https://www.bike-components.de/search/?q=${encodeURIComponent(model)}`;

export const components: Component[] = [
  // ══════════════════════════════════════════════════════════════
  // SHIMANO 105 R7000 (11-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'shi-r7000-shifters', groupset_id: 'shimano-105-r7000', category: 'shifters', name: 'Shimano 105 ST-R7000 Shifters', model_number: 'ST-R7000', price_eur: 149, affiliate_url: affiliateUrl('ST-R7000') },
  { id: 'shi-r7000-rd', groupset_id: 'shimano-105-r7000', category: 'rear_derailleur', name: 'Shimano 105 RD-R7000 Rear Derailleur', model_number: 'RD-R7000', price_eur: 59, affiliate_url: affiliateUrl('RD-R7000') },
  { id: 'shi-r7000-fd', groupset_id: 'shimano-105-r7000', category: 'front_derailleur', name: 'Shimano 105 FD-R7000 Front Derailleur', model_number: 'FD-R7000', price_eur: 39, affiliate_url: affiliateUrl('FD-R7000') },
  { id: 'shi-r7000-cassette', groupset_id: 'shimano-105-r7000', category: 'cassette', name: 'Shimano 105 CS-R7000 Cassette 11-28', model_number: 'CS-R7000', price_eur: 45, affiliate_url: affiliateUrl('CS-R7000') },
  { id: 'shi-r7000-chain', groupset_id: 'shimano-105-r7000', category: 'chain', name: 'Shimano HG601 11-speed Chain', model_number: 'CN-HG601', price_eur: 29, affiliate_url: affiliateUrl('CN-HG601') },
  { id: 'shi-r7000-crankset', groupset_id: 'shimano-105-r7000', category: 'crankset', name: 'Shimano 105 FC-R7000 Crankset 50/34', model_number: 'FC-R7000', price_eur: 99, affiliate_url: affiliateUrl('FC-R7000') },
  { id: 'shi-r7000-bb', groupset_id: 'shimano-105-r7000', category: 'bottom_bracket', name: 'Shimano SM-BBR60 BSA Bottom Bracket', model_number: 'SM-BBR60', price_eur: 29, affiliate_url: affiliateUrl('SM-BBR60') },
  { id: 'shi-r7000-brake', groupset_id: 'shimano-105-r7000', category: 'brake_caliper', name: 'Shimano 105 BR-R7000 Brake Caliper', model_number: 'BR-R7000', price_eur: 45, affiliate_url: affiliateUrl('BR-R7000') },
  { id: 'shi-r7000-bl', groupset_id: 'shimano-105-r7000', category: 'brake_lever', name: 'Shimano 105 BL-R7000 Brake Lever', model_number: 'BL-R7000', price_eur: 35, affiliate_url: affiliateUrl('BL-R7000'), description: 'Integrated with ST-R7000 shifter/lever combo' },

  // ══════════════════════════════════════════════════════════════
  // SHIMANO ULTEGRA R8000 (11-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'shi-r8000-shifters', groupset_id: 'shimano-ultegra-r8000', category: 'shifters', name: 'Shimano Ultegra ST-R8000 Shifters', model_number: 'ST-R8000', price_eur: 199, affiliate_url: affiliateUrl('ST-R8000') },
  { id: 'shi-r8000-rd', groupset_id: 'shimano-ultegra-r8000', category: 'rear_derailleur', name: 'Shimano Ultegra RD-R8000 Rear Derailleur', model_number: 'RD-R8000', price_eur: 89, affiliate_url: affiliateUrl('RD-R8000') },
  { id: 'shi-r8000-fd', groupset_id: 'shimano-ultegra-r8000', category: 'front_derailleur', name: 'Shimano Ultegra FD-R8000 Front Derailleur', model_number: 'FD-R8000', price_eur: 55, affiliate_url: affiliateUrl('FD-R8000') },
  { id: 'shi-r8000-cassette', groupset_id: 'shimano-ultegra-r8000', category: 'cassette', name: 'Shimano Ultegra CS-R8000 Cassette 11-28', model_number: 'CS-R8000', price_eur: 59, affiliate_url: affiliateUrl('CS-R8000') },
  { id: 'shi-r8000-chain', groupset_id: 'shimano-ultegra-r8000', category: 'chain', name: 'Shimano HG701 11-speed Chain', model_number: 'CN-HG701', price_eur: 35, affiliate_url: affiliateUrl('CN-HG701') },
  { id: 'shi-r8000-crankset', groupset_id: 'shimano-ultegra-r8000', category: 'crankset', name: 'Shimano Ultegra FC-R8000 Crankset 50/34', model_number: 'FC-R8000', price_eur: 169, affiliate_url: affiliateUrl('FC-R8000') },
  { id: 'shi-r8000-bb', groupset_id: 'shimano-ultegra-r8000', category: 'bottom_bracket', name: 'Shimano SM-BBR60 BSA Bottom Bracket', model_number: 'SM-BBR60', price_eur: 29, affiliate_url: affiliateUrl('SM-BBR60') },
  { id: 'shi-r8000-brake', groupset_id: 'shimano-ultegra-r8000', category: 'brake_caliper', name: 'Shimano Ultegra BR-R8000 Brake Caliper', model_number: 'BR-R8000', price_eur: 65, affiliate_url: affiliateUrl('BR-R8000') },
  { id: 'shi-r8000-bl', groupset_id: 'shimano-ultegra-r8000', category: 'brake_lever', name: 'Shimano Ultegra BL-R8000 Brake Lever', model_number: 'BL-R8000', price_eur: 55, affiliate_url: affiliateUrl('BL-R8000') },

  // ══════════════════════════════════════════════════════════════
  // SHIMANO DURA-ACE R9100 (11-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'shi-r9100-shifters', groupset_id: 'shimano-dura-ace-r9100', category: 'shifters', name: 'Shimano Dura-Ace ST-R9100 Shifters', model_number: 'ST-R9100', price_eur: 399, affiliate_url: affiliateUrl('ST-R9100') },
  { id: 'shi-r9100-rd', groupset_id: 'shimano-dura-ace-r9100', category: 'rear_derailleur', name: 'Shimano Dura-Ace RD-R9100 Rear Derailleur', model_number: 'RD-R9100', price_eur: 199, affiliate_url: affiliateUrl('RD-R9100') },
  { id: 'shi-r9100-fd', groupset_id: 'shimano-dura-ace-r9100', category: 'front_derailleur', name: 'Shimano Dura-Ace FD-R9100 Front Derailleur', model_number: 'FD-R9100', price_eur: 129, affiliate_url: affiliateUrl('FD-R9100') },
  { id: 'shi-r9100-cassette', groupset_id: 'shimano-dura-ace-r9100', category: 'cassette', name: 'Shimano Dura-Ace CS-R9100 Cassette 11-28', model_number: 'CS-R9100', price_eur: 119, affiliate_url: affiliateUrl('CS-R9100') },
  { id: 'shi-r9100-chain', groupset_id: 'shimano-dura-ace-r9100', category: 'chain', name: 'Shimano HG901 11-speed Chain', model_number: 'CN-HG901', price_eur: 45, affiliate_url: affiliateUrl('CN-HG901') },
  { id: 'shi-r9100-crankset', groupset_id: 'shimano-dura-ace-r9100', category: 'crankset', name: 'Shimano Dura-Ace FC-R9100 Crankset 50/34', model_number: 'FC-R9100', price_eur: 339, affiliate_url: affiliateUrl('FC-R9100') },
  { id: 'shi-r9100-bb', groupset_id: 'shimano-dura-ace-r9100', category: 'bottom_bracket', name: 'Shimano SM-BBR60 BSA Bottom Bracket', model_number: 'SM-BBR60', price_eur: 29, affiliate_url: affiliateUrl('SM-BBR60') },
  { id: 'shi-r9100-brake', groupset_id: 'shimano-dura-ace-r9100', category: 'brake_caliper', name: 'Shimano Dura-Ace BR-R9100 Brake Caliper', model_number: 'BR-R9100', price_eur: 199, affiliate_url: affiliateUrl('BR-R9100') },
  { id: 'shi-r9100-bl', groupset_id: 'shimano-dura-ace-r9100', category: 'brake_lever', name: 'Shimano Dura-Ace BL-R9100 Brake Lever', model_number: 'BL-R9100', price_eur: 149, affiliate_url: affiliateUrl('BL-R9100') },

  // ══════════════════════════════════════════════════════════════
  // SHIMANO 105 R7100 Di2 (12-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'shi-r7100-shifters', groupset_id: 'shimano-105-r7100', category: 'shifters', name: 'Shimano 105 ST-R7170 Di2 Shifters', model_number: 'ST-R7170', price_eur: 299, affiliate_url: affiliateUrl('ST-R7170') },
  { id: 'shi-r7100-rd', groupset_id: 'shimano-105-r7100', category: 'rear_derailleur', name: 'Shimano 105 RD-R7150 Di2 Rear Derailleur', model_number: 'RD-R7150', price_eur: 179, affiliate_url: affiliateUrl('RD-R7150') },
  { id: 'shi-r7100-fd', groupset_id: 'shimano-105-r7100', category: 'front_derailleur', name: 'Shimano 105 FD-R7150 Di2 Front Derailleur', model_number: 'FD-R7150', price_eur: 99, affiliate_url: affiliateUrl('FD-R7150') },
  { id: 'shi-r7100-cassette', groupset_id: 'shimano-105-r7100', category: 'cassette', name: 'Shimano 105 CS-R7100 Cassette 11-34', model_number: 'CS-R7100', price_eur: 55, affiliate_url: affiliateUrl('CS-R7100') },
  { id: 'shi-r7100-chain', groupset_id: 'shimano-105-r7100', category: 'chain', name: 'Shimano CN-M7100 12-speed Chain', model_number: 'CN-M7100', price_eur: 35, affiliate_url: affiliateUrl('CN-M7100') },
  { id: 'shi-r7100-crankset', groupset_id: 'shimano-105-r7100', category: 'crankset', name: 'Shimano 105 FC-R7100 Crankset 50/34', model_number: 'FC-R7100', price_eur: 139, affiliate_url: affiliateUrl('FC-R7100') },
  { id: 'shi-r7100-bb', groupset_id: 'shimano-105-r7100', category: 'bottom_bracket', name: 'Shimano SM-BBR60 BSA Bottom Bracket', model_number: 'SM-BBR60', price_eur: 29, affiliate_url: affiliateUrl('SM-BBR60') },
  { id: 'shi-r7100-brake', groupset_id: 'shimano-105-r7100', category: 'brake_caliper', name: 'Shimano 105 BR-R7170 Hydraulic Caliper', model_number: 'BR-R7170', price_eur: 69, affiliate_url: affiliateUrl('BR-R7170') },
  { id: 'shi-r7100-bl', groupset_id: 'shimano-105-r7100', category: 'brake_lever', name: 'Shimano 105 BL-R7170 Di2 Brake Lever', model_number: 'BL-R7170', price_eur: 59, affiliate_url: affiliateUrl('BL-R7170') },

  // ══════════════════════════════════════════════════════════════
  // SHIMANO ULTEGRA R8100 Di2 (12-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'shi-r8100-shifters', groupset_id: 'shimano-ultegra-r8100', category: 'shifters', name: 'Shimano Ultegra ST-R8170 Di2 Shifters', model_number: 'ST-R8170', price_eur: 449, affiliate_url: affiliateUrl('ST-R8170') },
  { id: 'shi-r8100-rd', groupset_id: 'shimano-ultegra-r8100', category: 'rear_derailleur', name: 'Shimano Ultegra RD-R8150 Di2 Rear Derailleur', model_number: 'RD-R8150', price_eur: 269, affiliate_url: affiliateUrl('RD-R8150') },
  { id: 'shi-r8100-fd', groupset_id: 'shimano-ultegra-r8100', category: 'front_derailleur', name: 'Shimano Ultegra FD-R8150 Di2 Front Derailleur', model_number: 'FD-R8150', price_eur: 149, affiliate_url: affiliateUrl('FD-R8150') },
  { id: 'shi-r8100-cassette', groupset_id: 'shimano-ultegra-r8100', category: 'cassette', name: 'Shimano Ultegra CS-R8100 Cassette 11-34', model_number: 'CS-R8100', price_eur: 75, affiliate_url: affiliateUrl('CS-R8100') },
  { id: 'shi-r8100-chain', groupset_id: 'shimano-ultegra-r8100', category: 'chain', name: 'Shimano CN-M8100 12-speed Chain', model_number: 'CN-M8100', price_eur: 45, affiliate_url: affiliateUrl('CN-M8100') },
  { id: 'shi-r8100-crankset', groupset_id: 'shimano-ultegra-r8100', category: 'crankset', name: 'Shimano Ultegra FC-R8100 Crankset 50/34', model_number: 'FC-R8100', price_eur: 249, affiliate_url: affiliateUrl('FC-R8100') },
  { id: 'shi-r8100-bb', groupset_id: 'shimano-ultegra-r8100', category: 'bottom_bracket', name: 'Shimano SM-BBR60 BSA Bottom Bracket', model_number: 'SM-BBR60', price_eur: 29, affiliate_url: affiliateUrl('SM-BBR60') },
  { id: 'shi-r8100-brake', groupset_id: 'shimano-ultegra-r8100', category: 'brake_caliper', name: 'Shimano Ultegra BR-R8170 Hydraulic Caliper', model_number: 'BR-R8170', price_eur: 99, affiliate_url: affiliateUrl('BR-R8170') },
  { id: 'shi-r8100-bl', groupset_id: 'shimano-ultegra-r8100', category: 'brake_lever', name: 'Shimano Ultegra BL-R8170 Di2 Brake Lever', model_number: 'BL-R8170', price_eur: 89, affiliate_url: affiliateUrl('BL-R8170') },

  // ══════════════════════════════════════════════════════════════
  // SHIMANO DURA-ACE R9200 Di2 (12-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'shi-r9200-shifters', groupset_id: 'shimano-dura-ace-r9200', category: 'shifters', name: 'Shimano Dura-Ace ST-R9270 Di2 Shifters', model_number: 'ST-R9270', price_eur: 749, affiliate_url: affiliateUrl('ST-R9270') },
  { id: 'shi-r9200-rd', groupset_id: 'shimano-dura-ace-r9200', category: 'rear_derailleur', name: 'Shimano Dura-Ace RD-R9250 Di2 Rear Derailleur', model_number: 'RD-R9250', price_eur: 449, affiliate_url: affiliateUrl('RD-R9250') },
  { id: 'shi-r9200-fd', groupset_id: 'shimano-dura-ace-r9200', category: 'front_derailleur', name: 'Shimano Dura-Ace FD-R9250 Di2 Front Derailleur', model_number: 'FD-R9250', price_eur: 249, affiliate_url: affiliateUrl('FD-R9250') },
  { id: 'shi-r9200-cassette', groupset_id: 'shimano-dura-ace-r9200', category: 'cassette', name: 'Shimano Dura-Ace CS-R9200 Cassette 11-30', model_number: 'CS-R9200', price_eur: 189, affiliate_url: affiliateUrl('CS-R9200') },
  { id: 'shi-r9200-chain', groupset_id: 'shimano-dura-ace-r9200', category: 'chain', name: 'Shimano CN-M9100 12-speed Chain', model_number: 'CN-M9100', price_eur: 69, affiliate_url: affiliateUrl('CN-M9100') },
  { id: 'shi-r9200-crankset', groupset_id: 'shimano-dura-ace-r9200', category: 'crankset', name: 'Shimano Dura-Ace FC-R9200 Crankset 50/34', model_number: 'FC-R9200', price_eur: 499, affiliate_url: affiliateUrl('FC-R9200') },
  { id: 'shi-r9200-bb', groupset_id: 'shimano-dura-ace-r9200', category: 'bottom_bracket', name: 'Shimano SM-BBR60 BSA Bottom Bracket', model_number: 'SM-BBR60', price_eur: 29, affiliate_url: affiliateUrl('SM-BBR60') },
  { id: 'shi-r9200-brake', groupset_id: 'shimano-dura-ace-r9200', category: 'brake_caliper', name: 'Shimano Dura-Ace BR-R9270 Hydraulic Caliper', model_number: 'BR-R9270', price_eur: 199, affiliate_url: affiliateUrl('BR-R9270') },
  { id: 'shi-r9200-bl', groupset_id: 'shimano-dura-ace-r9200', category: 'brake_lever', name: 'Shimano Dura-Ace BL-R9270 Di2 Brake Lever', model_number: 'BL-R9270', price_eur: 179, affiliate_url: affiliateUrl('BL-R9270') },

  // ══════════════════════════════════════════════════════════════
  // SRAM RIVAL 22 (11-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'sram-rival22-shifters', groupset_id: 'sram-rival-22', category: 'shifters', name: 'SRAM Rival 22 DoubleTap Shifters', model_number: 'RIVAL22-SHIFTER', price_eur: 139, affiliate_url: affiliateUrl('SRAM+Rival+22+shifter') },
  { id: 'sram-rival22-rd', groupset_id: 'sram-rival-22', category: 'rear_derailleur', name: 'SRAM Rival 22 Rear Derailleur', model_number: 'RIVAL22-RD', price_eur: 65, affiliate_url: affiliateUrl('SRAM+Rival+22+rear+derailleur') },
  { id: 'sram-rival22-fd', groupset_id: 'sram-rival-22', category: 'front_derailleur', name: 'SRAM Rival 22 Front Derailleur', model_number: 'RIVAL22-FD', price_eur: 35, affiliate_url: affiliateUrl('SRAM+Rival+22+front+derailleur') },
  { id: 'sram-rival22-cassette', groupset_id: 'sram-rival-22', category: 'cassette', name: 'SRAM PG-1130 Cassette 11-32', model_number: 'PG-1130', price_eur: 39, affiliate_url: affiliateUrl('SRAM+PG-1130') },
  { id: 'sram-rival22-chain', groupset_id: 'sram-rival-22', category: 'chain', name: 'SRAM PC-1110 11-speed Chain', model_number: 'PC-1110', price_eur: 25, affiliate_url: affiliateUrl('SRAM+PC-1110') },
  { id: 'sram-rival22-crankset', groupset_id: 'sram-rival-22', category: 'crankset', name: 'SRAM Rival 22 Crankset 50/34', model_number: 'RIVAL22-CRANK', price_eur: 99, affiliate_url: affiliateUrl('SRAM+Rival+22+crankset') },
  { id: 'sram-rival22-bb', groupset_id: 'sram-rival-22', category: 'bottom_bracket', name: 'SRAM GXP BSA Bottom Bracket', model_number: 'SRAM-GXP-BSA', price_eur: 39, affiliate_url: affiliateUrl('SRAM+GXP+BSA') },
  { id: 'sram-rival22-brake', groupset_id: 'sram-rival-22', category: 'brake_caliper', name: 'SRAM Rival 22 Brake Caliper', model_number: 'RIVAL22-BRAKE', price_eur: 49, affiliate_url: affiliateUrl('SRAM+Rival+22+brake') },
  { id: 'sram-rival22-bl', groupset_id: 'sram-rival-22', category: 'brake_lever', name: 'SRAM Rival 22 Brake Lever', model_number: 'RIVAL22-BL', price_eur: 39, affiliate_url: affiliateUrl('SRAM+Rival+22+brake+lever') },

  // ══════════════════════════════════════════════════════════════
  // SRAM FORCE 22 (11-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'sram-force22-shifters', groupset_id: 'sram-force-22', category: 'shifters', name: 'SRAM Force 22 DoubleTap Shifters', model_number: 'FORCE22-SHIFTER', price_eur: 199, affiliate_url: affiliateUrl('SRAM+Force+22+shifter') },
  { id: 'sram-force22-rd', groupset_id: 'sram-force-22', category: 'rear_derailleur', name: 'SRAM Force 22 Rear Derailleur', model_number: 'FORCE22-RD', price_eur: 89, affiliate_url: affiliateUrl('SRAM+Force+22+rear+derailleur') },
  { id: 'sram-force22-fd', groupset_id: 'sram-force-22', category: 'front_derailleur', name: 'SRAM Force 22 Front Derailleur', model_number: 'FORCE22-FD', price_eur: 49, affiliate_url: affiliateUrl('SRAM+Force+22+front+derailleur') },
  { id: 'sram-force22-cassette', groupset_id: 'sram-force-22', category: 'cassette', name: 'SRAM PG-1170 Cassette 11-28', model_number: 'PG-1170', price_eur: 49, affiliate_url: affiliateUrl('SRAM+PG-1170') },
  { id: 'sram-force22-chain', groupset_id: 'sram-force-22', category: 'chain', name: 'SRAM PC-1130 11-speed Chain', model_number: 'PC-1130', price_eur: 32, affiliate_url: affiliateUrl('SRAM+PC-1130') },
  { id: 'sram-force22-crankset', groupset_id: 'sram-force-22', category: 'crankset', name: 'SRAM Force 22 Crankset 50/34', model_number: 'FORCE22-CRANK', price_eur: 149, affiliate_url: affiliateUrl('SRAM+Force+22+crankset') },
  { id: 'sram-force22-bb', groupset_id: 'sram-force-22', category: 'bottom_bracket', name: 'SRAM GXP BSA Bottom Bracket', model_number: 'SRAM-GXP-BSA', price_eur: 39, affiliate_url: affiliateUrl('SRAM+GXP+BSA') },
  { id: 'sram-force22-brake', groupset_id: 'sram-force-22', category: 'brake_caliper', name: 'SRAM Force 22 Brake Caliper', model_number: 'FORCE22-BRAKE', price_eur: 75, affiliate_url: affiliateUrl('SRAM+Force+22+brake') },
  { id: 'sram-force22-bl', groupset_id: 'sram-force-22', category: 'brake_lever', name: 'SRAM Force 22 Brake Lever', model_number: 'FORCE22-BL', price_eur: 55, affiliate_url: affiliateUrl('SRAM+Force+22+brake+lever') },

  // ══════════════════════════════════════════════════════════════
  // SRAM RED 22 (11-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'sram-red22-shifters', groupset_id: 'sram-red-22', category: 'shifters', name: 'SRAM Red 22 DoubleTap Shifters', model_number: 'RED22-SHIFTER', price_eur: 399, affiliate_url: affiliateUrl('SRAM+Red+22+shifter') },
  { id: 'sram-red22-rd', groupset_id: 'sram-red-22', category: 'rear_derailleur', name: 'SRAM Red 22 Rear Derailleur', model_number: 'RED22-RD', price_eur: 229, affiliate_url: affiliateUrl('SRAM+Red+22+rear+derailleur') },
  { id: 'sram-red22-fd', groupset_id: 'sram-red-22', category: 'front_derailleur', name: 'SRAM Red 22 Front Derailleur', model_number: 'RED22-FD', price_eur: 149, affiliate_url: affiliateUrl('SRAM+Red+22+front+derailleur') },
  { id: 'sram-red22-cassette', groupset_id: 'sram-red-22', category: 'cassette', name: 'SRAM XG-1190 Cassette 11-28', model_number: 'XG-1190', price_eur: 149, affiliate_url: affiliateUrl('SRAM+XG-1190') },
  { id: 'sram-red22-chain', groupset_id: 'sram-red-22', category: 'chain', name: 'SRAM PC-Red 11-speed Chain', model_number: 'PC-RED22', price_eur: 59, affiliate_url: affiliateUrl('SRAM+PC+Red+22') },
  { id: 'sram-red22-crankset', groupset_id: 'sram-red-22', category: 'crankset', name: 'SRAM Red 22 GXP Crankset 50/34', model_number: 'RED22-CRANK', price_eur: 349, affiliate_url: affiliateUrl('SRAM+Red+22+crankset') },
  { id: 'sram-red22-bb', groupset_id: 'sram-red-22', category: 'bottom_bracket', name: 'SRAM GXP BSA Bottom Bracket', model_number: 'SRAM-GXP-BSA', price_eur: 39, affiliate_url: affiliateUrl('SRAM+GXP+BSA') },
  { id: 'sram-red22-brake', groupset_id: 'sram-red-22', category: 'brake_caliper', name: 'SRAM Red 22 Brake Caliper', model_number: 'RED22-BRAKE', price_eur: 199, affiliate_url: affiliateUrl('SRAM+Red+22+brake') },
  { id: 'sram-red22-bl', groupset_id: 'sram-red-22', category: 'brake_lever', name: 'SRAM Red 22 Brake Lever', model_number: 'RED22-BL', price_eur: 149, affiliate_url: affiliateUrl('SRAM+Red+22+brake+lever') },

  // ══════════════════════════════════════════════════════════════
  // SRAM RIVAL AXS (12-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'sram-rivalaxs-shifters', groupset_id: 'sram-rival-axs', category: 'shifters', name: 'SRAM Rival AXS Shifters', model_number: 'RIVALAXS-SHIFTER', price_eur: 299, affiliate_url: affiliateUrl('SRAM+Rival+AXS+shifter') },
  { id: 'sram-rivalaxs-rd', groupset_id: 'sram-rival-axs', category: 'rear_derailleur', name: 'SRAM Rival AXS Rear Derailleur', model_number: 'RIVALAXS-RD', price_eur: 249, affiliate_url: affiliateUrl('SRAM+Rival+AXS+rear+derailleur') },
  { id: 'sram-rivalaxs-fd', groupset_id: 'sram-rival-axs', category: 'front_derailleur', name: 'SRAM Rival AXS Front Derailleur', model_number: 'RIVALAXS-FD', price_eur: 149, affiliate_url: affiliateUrl('SRAM+Rival+AXS+front+derailleur') },
  { id: 'sram-rivalaxs-cassette', groupset_id: 'sram-rival-axs', category: 'cassette', name: 'SRAM XG-1251 Cassette 10-33 XDR', model_number: 'XG-1251', price_eur: 89, affiliate_url: affiliateUrl('SRAM+XG-1251') },
  { id: 'sram-rivalaxs-chain', groupset_id: 'sram-rival-axs', category: 'chain', name: 'SRAM PC-1230 12-speed Chain', model_number: 'PC-1230', price_eur: 39, affiliate_url: affiliateUrl('SRAM+PC-1230') },
  { id: 'sram-rivalaxs-crankset', groupset_id: 'sram-rival-axs', category: 'crankset', name: 'SRAM Rival AXS Wide Crankset 48/35', model_number: 'RIVALAXS-CRANK', price_eur: 199, affiliate_url: affiliateUrl('SRAM+Rival+AXS+crankset') },
  { id: 'sram-rivalaxs-bb', groupset_id: 'sram-rival-axs', category: 'bottom_bracket', name: 'SRAM DUB BSA Bottom Bracket', model_number: 'SRAM-DUB-BSA', price_eur: 49, affiliate_url: affiliateUrl('SRAM+DUB+BSA') },
  { id: 'sram-rivalaxs-brake', groupset_id: 'sram-rival-axs', category: 'brake_caliper', name: 'SRAM Rival AXS Hydraulic Caliper', model_number: 'RIVALAXS-BRAKE', price_eur: 79, affiliate_url: affiliateUrl('SRAM+Rival+AXS+brake') },
  { id: 'sram-rivalaxs-bl', groupset_id: 'sram-rival-axs', category: 'brake_lever', name: 'SRAM Rival AXS Brake/Shift Lever', model_number: 'RIVALAXS-BL', price_eur: 69, affiliate_url: affiliateUrl('SRAM+Rival+AXS+lever') },

  // ══════════════════════════════════════════════════════════════
  // SRAM FORCE AXS (12-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'sram-forceaxs-shifters', groupset_id: 'sram-force-axs', category: 'shifters', name: 'SRAM Force AXS Shifters', model_number: 'FORCEAXS-SHIFTER', price_eur: 449, affiliate_url: affiliateUrl('SRAM+Force+AXS+shifter') },
  { id: 'sram-forceaxs-rd', groupset_id: 'sram-force-axs', category: 'rear_derailleur', name: 'SRAM Force AXS Rear Derailleur', model_number: 'FORCEAXS-RD', price_eur: 379, affiliate_url: affiliateUrl('SRAM+Force+AXS+rear+derailleur') },
  { id: 'sram-forceaxs-fd', groupset_id: 'sram-force-axs', category: 'front_derailleur', name: 'SRAM Force AXS Front Derailleur', model_number: 'FORCEAXS-FD', price_eur: 199, affiliate_url: affiliateUrl('SRAM+Force+AXS+front+derailleur') },
  { id: 'sram-forceaxs-cassette', groupset_id: 'sram-force-axs', category: 'cassette', name: 'SRAM XG-1270 Cassette 10-28 XDR', model_number: 'XG-1270', price_eur: 129, affiliate_url: affiliateUrl('SRAM+XG-1270') },
  { id: 'sram-forceaxs-chain', groupset_id: 'sram-force-axs', category: 'chain', name: 'SRAM PC-1270 12-speed Chain', model_number: 'PC-1270', price_eur: 49, affiliate_url: affiliateUrl('SRAM+PC-1270') },
  { id: 'sram-forceaxs-crankset', groupset_id: 'sram-force-axs', category: 'crankset', name: 'SRAM Force AXS Wide Crankset 48/35', model_number: 'FORCEAXS-CRANK', price_eur: 349, affiliate_url: affiliateUrl('SRAM+Force+AXS+crankset') },
  { id: 'sram-forceaxs-bb', groupset_id: 'sram-force-axs', category: 'bottom_bracket', name: 'SRAM DUB BSA Bottom Bracket', model_number: 'SRAM-DUB-BSA', price_eur: 49, affiliate_url: affiliateUrl('SRAM+DUB+BSA') },
  { id: 'sram-forceaxs-brake', groupset_id: 'sram-force-axs', category: 'brake_caliper', name: 'SRAM Force AXS Hydraulic Caliper', model_number: 'FORCEAXS-BRAKE', price_eur: 119, affiliate_url: affiliateUrl('SRAM+Force+AXS+brake') },
  { id: 'sram-forceaxs-bl', groupset_id: 'sram-force-axs', category: 'brake_lever', name: 'SRAM Force AXS Brake/Shift Lever', model_number: 'FORCEAXS-BL', price_eur: 99, affiliate_url: affiliateUrl('SRAM+Force+AXS+lever') },

  // ══════════════════════════════════════════════════════════════
  // SRAM RED AXS (12-speed)
  // ══════════════════════════════════════════════════════════════
  { id: 'sram-redaxs-shifters', groupset_id: 'sram-red-axs', category: 'shifters', name: 'SRAM Red AXS Shifters', model_number: 'REDAXS-SHIFTER', price_eur: 749, affiliate_url: affiliateUrl('SRAM+Red+AXS+shifter') },
  { id: 'sram-redaxs-rd', groupset_id: 'sram-red-axs', category: 'rear_derailleur', name: 'SRAM Red AXS Rear Derailleur', model_number: 'REDAXS-RD', price_eur: 599, affiliate_url: affiliateUrl('SRAM+Red+AXS+rear+derailleur') },
  { id: 'sram-redaxs-fd', groupset_id: 'sram-red-axs', category: 'front_derailleur', name: 'SRAM Red AXS Front Derailleur', model_number: 'REDAXS-FD', price_eur: 299, affiliate_url: affiliateUrl('SRAM+Red+AXS+front+derailleur') },
  { id: 'sram-redaxs-cassette', groupset_id: 'sram-red-axs', category: 'cassette', name: 'SRAM XG-1290 Cassette 10-28 XDR', model_number: 'XG-1290', price_eur: 219, affiliate_url: affiliateUrl('SRAM+XG-1290') },
  { id: 'sram-redaxs-chain', groupset_id: 'sram-red-axs', category: 'chain', name: 'SRAM PC-Red AXS 12-speed Chain', model_number: 'PC-REDAXS', price_eur: 69, affiliate_url: affiliateUrl('SRAM+Red+AXS+chain') },
  { id: 'sram-redaxs-crankset', groupset_id: 'sram-red-axs', category: 'crankset', name: 'SRAM Red AXS Power Meter Crankset 50/37', model_number: 'REDAXS-CRANK', price_eur: 699, affiliate_url: affiliateUrl('SRAM+Red+AXS+crankset') },
  { id: 'sram-redaxs-bb', groupset_id: 'sram-red-axs', category: 'bottom_bracket', name: 'SRAM DUB BSA Bottom Bracket', model_number: 'SRAM-DUB-BSA', price_eur: 49, affiliate_url: affiliateUrl('SRAM+DUB+BSA') },
  { id: 'sram-redaxs-brake', groupset_id: 'sram-red-axs', category: 'brake_caliper', name: 'SRAM Red AXS Hydraulic Caliper', model_number: 'REDAXS-BRAKE', price_eur: 199, affiliate_url: affiliateUrl('SRAM+Red+AXS+brake') },
  { id: 'sram-redaxs-bl', groupset_id: 'sram-red-axs', category: 'brake_lever', name: 'SRAM Red AXS Brake/Shift Lever', model_number: 'REDAXS-BL', price_eur: 179, affiliate_url: affiliateUrl('SRAM+Red+AXS+lever') },

  // ══════════════════════════════════════════════════════════════
  // CAMPAGNOLO CHORUS 11s
  // ══════════════════════════════════════════════════════════════
  { id: 'campy-chorus11-shifters', groupset_id: 'campagnolo-chorus-11s', category: 'shifters', name: 'Campagnolo Chorus 11s Ergopower Shifters', model_number: 'EC-CH511', price_eur: 289, affiliate_url: affiliateUrl('Campagnolo+Chorus+11s+Ergopower') },
  { id: 'campy-chorus11-rd', groupset_id: 'campagnolo-chorus-11s', category: 'rear_derailleur', name: 'Campagnolo Chorus 11s Rear Derailleur', model_number: 'RD-CH511', price_eur: 109, affiliate_url: affiliateUrl('Campagnolo+Chorus+11s+rear+derailleur') },
  { id: 'campy-chorus11-fd', groupset_id: 'campagnolo-chorus-11s', category: 'front_derailleur', name: 'Campagnolo Chorus 11s Front Derailleur', model_number: 'FD-CH511', price_eur: 69, affiliate_url: affiliateUrl('Campagnolo+Chorus+11s+front+derailleur') },
  { id: 'campy-chorus11-cassette', groupset_id: 'campagnolo-chorus-11s', category: 'cassette', name: 'Campagnolo Chorus 11s Cassette 11-29', model_number: 'CS-CH511', price_eur: 69, affiliate_url: affiliateUrl('Campagnolo+Chorus+11s+cassette') },
  { id: 'campy-chorus11-chain', groupset_id: 'campagnolo-chorus-11s', category: 'chain', name: 'Campagnolo Chorus 11s Chain', model_number: 'CN-CH511', price_eur: 39, affiliate_url: affiliateUrl('Campagnolo+Chorus+11s+chain') },
  { id: 'campy-chorus11-crankset', groupset_id: 'campagnolo-chorus-11s', category: 'crankset', name: 'Campagnolo Chorus 11s Crankset 52/36', model_number: 'FC-CH511', price_eur: 199, affiliate_url: affiliateUrl('Campagnolo+Chorus+11s+crankset') },
  { id: 'campy-chorus11-bb', groupset_id: 'campagnolo-chorus-11s', category: 'bottom_bracket', name: 'Campagnolo Ultra-Torque BSA Bottom Bracket', model_number: 'BB-UT-BSA', price_eur: 49, affiliate_url: affiliateUrl('Campagnolo+Ultra-Torque+BSA') },
  { id: 'campy-chorus11-brake', groupset_id: 'campagnolo-chorus-11s', category: 'brake_caliper', name: 'Campagnolo Chorus 11s Brake Caliper', model_number: 'BR-CH511', price_eur: 89, affiliate_url: affiliateUrl('Campagnolo+Chorus+11s+brake') },
  { id: 'campy-chorus11-bl', groupset_id: 'campagnolo-chorus-11s', category: 'brake_lever', name: 'Campagnolo Chorus 11s Brake Lever', model_number: 'BL-CH511', price_eur: 75, affiliate_url: affiliateUrl('Campagnolo+Chorus+11s+lever') },

  // ══════════════════════════════════════════════════════════════
  // CAMPAGNOLO RECORD 11s
  // ══════════════════════════════════════════════════════════════
  { id: 'campy-record11-shifters', groupset_id: 'campagnolo-record-11s', category: 'shifters', name: 'Campagnolo Record 11s Ergopower Shifters', model_number: 'EC-RE511', price_eur: 429, affiliate_url: affiliateUrl('Campagnolo+Record+11s+Ergopower') },
  { id: 'campy-record11-rd', groupset_id: 'campagnolo-record-11s', category: 'rear_derailleur', name: 'Campagnolo Record 11s Rear Derailleur', model_number: 'RD-RE511', price_eur: 189, affiliate_url: affiliateUrl('Campagnolo+Record+11s+rear+derailleur') },
  { id: 'campy-record11-fd', groupset_id: 'campagnolo-record-11s', category: 'front_derailleur', name: 'Campagnolo Record 11s Front Derailleur', model_number: 'FD-RE511', price_eur: 119, affiliate_url: affiliateUrl('Campagnolo+Record+11s+front+derailleur') },
  { id: 'campy-record11-cassette', groupset_id: 'campagnolo-record-11s', category: 'cassette', name: 'Campagnolo Record 11s Cassette 11-29', model_number: 'CS-RE511', price_eur: 109, affiliate_url: affiliateUrl('Campagnolo+Record+11s+cassette') },
  { id: 'campy-record11-chain', groupset_id: 'campagnolo-record-11s', category: 'chain', name: 'Campagnolo Record 11s Chain', model_number: 'CN-RE511', price_eur: 55, affiliate_url: affiliateUrl('Campagnolo+Record+11s+chain') },
  { id: 'campy-record11-crankset', groupset_id: 'campagnolo-record-11s', category: 'crankset', name: 'Campagnolo Record 11s Crankset 52/36', model_number: 'FC-RE511', price_eur: 349, affiliate_url: affiliateUrl('Campagnolo+Record+11s+crankset') },
  { id: 'campy-record11-bb', groupset_id: 'campagnolo-record-11s', category: 'bottom_bracket', name: 'Campagnolo Ultra-Torque BSA Bottom Bracket', model_number: 'BB-UT-BSA', price_eur: 49, affiliate_url: affiliateUrl('Campagnolo+Ultra-Torque+BSA') },
  { id: 'campy-record11-brake', groupset_id: 'campagnolo-record-11s', category: 'brake_caliper', name: 'Campagnolo Record 11s Brake Caliper', model_number: 'BR-RE511', price_eur: 149, affiliate_url: affiliateUrl('Campagnolo+Record+11s+brake') },
  { id: 'campy-record11-bl', groupset_id: 'campagnolo-record-11s', category: 'brake_lever', name: 'Campagnolo Record 11s Brake Lever', model_number: 'BL-RE511', price_eur: 129, affiliate_url: affiliateUrl('Campagnolo+Record+11s+lever') },

  // ══════════════════════════════════════════════════════════════
  // CAMPAGNOLO SUPER RECORD 11s
  // ══════════════════════════════════════════════════════════════
  { id: 'campy-sr11-shifters', groupset_id: 'campagnolo-super-record-11s', category: 'shifters', name: 'Campagnolo Super Record 11s Ergopower', model_number: 'EC-SR511', price_eur: 699, affiliate_url: affiliateUrl('Campagnolo+Super+Record+11s+Ergopower') },
  { id: 'campy-sr11-rd', groupset_id: 'campagnolo-super-record-11s', category: 'rear_derailleur', name: 'Campagnolo Super Record 11s Rear Derailleur', model_number: 'RD-SR511', price_eur: 299, affiliate_url: affiliateUrl('Campagnolo+Super+Record+11s+rear+derailleur') },
  { id: 'campy-sr11-fd', groupset_id: 'campagnolo-super-record-11s', category: 'front_derailleur', name: 'Campagnolo Super Record 11s Front Derailleur', model_number: 'FD-SR511', price_eur: 179, affiliate_url: affiliateUrl('Campagnolo+Super+Record+11s+front+derailleur') },
  { id: 'campy-sr11-cassette', groupset_id: 'campagnolo-super-record-11s', category: 'cassette', name: 'Campagnolo Super Record 11s Cassette 11-29', model_number: 'CS-SR511', price_eur: 169, affiliate_url: affiliateUrl('Campagnolo+Super+Record+11s+cassette') },
  { id: 'campy-sr11-chain', groupset_id: 'campagnolo-super-record-11s', category: 'chain', name: 'Campagnolo Super Record 11s Chain', model_number: 'CN-SR511', price_eur: 69, affiliate_url: affiliateUrl('Campagnolo+Super+Record+11s+chain') },
  { id: 'campy-sr11-crankset', groupset_id: 'campagnolo-super-record-11s', category: 'crankset', name: 'Campagnolo Super Record 11s Crankset 52/36', model_number: 'FC-SR511', price_eur: 549, affiliate_url: affiliateUrl('Campagnolo+Super+Record+11s+crankset') },
  { id: 'campy-sr11-bb', groupset_id: 'campagnolo-super-record-11s', category: 'bottom_bracket', name: 'Campagnolo Ultra-Torque BSA Bottom Bracket', model_number: 'BB-UT-BSA', price_eur: 49, affiliate_url: affiliateUrl('Campagnolo+Ultra-Torque+BSA') },
  { id: 'campy-sr11-brake', groupset_id: 'campagnolo-super-record-11s', category: 'brake_caliper', name: 'Campagnolo Super Record 11s Brake Caliper', model_number: 'BR-SR511', price_eur: 249, affiliate_url: affiliateUrl('Campagnolo+Super+Record+11s+brake') },
  { id: 'campy-sr11-bl', groupset_id: 'campagnolo-super-record-11s', category: 'brake_lever', name: 'Campagnolo Super Record 11s Brake Lever', model_number: 'BL-SR511', price_eur: 199, affiliate_url: affiliateUrl('Campagnolo+Super+Record+11s+lever') },

  // ══════════════════════════════════════════════════════════════
  // CAMPAGNOLO CHORUS 12s
  // ══════════════════════════════════════════════════════════════
  { id: 'campy-chorus12-shifters', groupset_id: 'campagnolo-chorus-12s', category: 'shifters', name: 'Campagnolo Chorus 12s Ergopower Shifters', model_number: 'EC-CH512', price_eur: 349, affiliate_url: affiliateUrl('Campagnolo+Chorus+12s+Ergopower') },
  { id: 'campy-chorus12-rd', groupset_id: 'campagnolo-chorus-12s', category: 'rear_derailleur', name: 'Campagnolo Chorus 12s Rear Derailleur', model_number: 'RD-CH512', price_eur: 149, affiliate_url: affiliateUrl('Campagnolo+Chorus+12s+rear+derailleur') },
  { id: 'campy-chorus12-fd', groupset_id: 'campagnolo-chorus-12s', category: 'front_derailleur', name: 'Campagnolo Chorus 12s Front Derailleur', model_number: 'FD-CH512', price_eur: 89, affiliate_url: affiliateUrl('Campagnolo+Chorus+12s+front+derailleur') },
  { id: 'campy-chorus12-cassette', groupset_id: 'campagnolo-chorus-12s', category: 'cassette', name: 'Campagnolo Chorus N3W Cassette 11-29', model_number: 'CS-CH512', price_eur: 99, affiliate_url: affiliateUrl('Campagnolo+Chorus+12s+cassette+N3W') },
  { id: 'campy-chorus12-chain', groupset_id: 'campagnolo-chorus-12s', category: 'chain', name: 'Campagnolo Chorus 12s Chain', model_number: 'CN-CH512', price_eur: 49, affiliate_url: affiliateUrl('Campagnolo+Chorus+12s+chain') },
  { id: 'campy-chorus12-crankset', groupset_id: 'campagnolo-chorus-12s', category: 'crankset', name: 'Campagnolo Chorus 12s Crankset 52/36', model_number: 'FC-CH512', price_eur: 249, affiliate_url: affiliateUrl('Campagnolo+Chorus+12s+crankset') },
  { id: 'campy-chorus12-bb', groupset_id: 'campagnolo-chorus-12s', category: 'bottom_bracket', name: 'Campagnolo Ultra-Torque BSA Bottom Bracket', model_number: 'BB-UT-BSA', price_eur: 49, affiliate_url: affiliateUrl('Campagnolo+Ultra-Torque+BSA') },
  { id: 'campy-chorus12-brake', groupset_id: 'campagnolo-chorus-12s', category: 'brake_caliper', name: 'Campagnolo Chorus 12s Brake Caliper', model_number: 'BR-CH512', price_eur: 109, affiliate_url: affiliateUrl('Campagnolo+Chorus+12s+brake') },
  { id: 'campy-chorus12-bl', groupset_id: 'campagnolo-chorus-12s', category: 'brake_lever', name: 'Campagnolo Chorus 12s Brake Lever', model_number: 'BL-CH512', price_eur: 89, affiliate_url: affiliateUrl('Campagnolo+Chorus+12s+lever') },

  // ══════════════════════════════════════════════════════════════
  // CAMPAGNOLO RECORD 12s
  // ══════════════════════════════════════════════════════════════
  { id: 'campy-record12-shifters', groupset_id: 'campagnolo-record-12s', category: 'shifters', name: 'Campagnolo Record 12s Ergopower Shifters', model_number: 'EC-RE512', price_eur: 549, affiliate_url: affiliateUrl('Campagnolo+Record+12s+Ergopower') },
  { id: 'campy-record12-rd', groupset_id: 'campagnolo-record-12s', category: 'rear_derailleur', name: 'Campagnolo Record 12s Rear Derailleur', model_number: 'RD-RE512', price_eur: 249, affiliate_url: affiliateUrl('Campagnolo+Record+12s+rear+derailleur') },
  { id: 'campy-record12-fd', groupset_id: 'campagnolo-record-12s', category: 'front_derailleur', name: 'Campagnolo Record 12s Front Derailleur', model_number: 'FD-RE512', price_eur: 149, affiliate_url: affiliateUrl('Campagnolo+Record+12s+front+derailleur') },
  { id: 'campy-record12-cassette', groupset_id: 'campagnolo-record-12s', category: 'cassette', name: 'Campagnolo Record N3W Cassette 11-29', model_number: 'CS-RE512', price_eur: 149, affiliate_url: affiliateUrl('Campagnolo+Record+12s+cassette+N3W') },
  { id: 'campy-record12-chain', groupset_id: 'campagnolo-record-12s', category: 'chain', name: 'Campagnolo Record 12s Chain', model_number: 'CN-RE512', price_eur: 69, affiliate_url: affiliateUrl('Campagnolo+Record+12s+chain') },
  { id: 'campy-record12-crankset', groupset_id: 'campagnolo-record-12s', category: 'crankset', name: 'Campagnolo Record 12s Crankset 52/36', model_number: 'FC-RE512', price_eur: 449, affiliate_url: affiliateUrl('Campagnolo+Record+12s+crankset') },
  { id: 'campy-record12-bb', groupset_id: 'campagnolo-record-12s', category: 'bottom_bracket', name: 'Campagnolo Ultra-Torque BSA Bottom Bracket', model_number: 'BB-UT-BSA', price_eur: 49, affiliate_url: affiliateUrl('Campagnolo+Ultra-Torque+BSA') },
  { id: 'campy-record12-brake', groupset_id: 'campagnolo-record-12s', category: 'brake_caliper', name: 'Campagnolo Record 12s Brake Caliper', model_number: 'BR-RE512', price_eur: 199, affiliate_url: affiliateUrl('Campagnolo+Record+12s+brake') },
  { id: 'campy-record12-bl', groupset_id: 'campagnolo-record-12s', category: 'brake_lever', name: 'Campagnolo Record 12s Brake Lever', model_number: 'BL-RE512', price_eur: 169, affiliate_url: affiliateUrl('Campagnolo+Record+12s+lever') },

  // ══════════════════════════════════════════════════════════════
  // CAMPAGNOLO SUPER RECORD 12s
  // ══════════════════════════════════════════════════════════════
  { id: 'campy-sr12-shifters', groupset_id: 'campagnolo-super-record-12s', category: 'shifters', name: 'Campagnolo Super Record 12s Ergopower', model_number: 'EC-SR512', price_eur: 849, affiliate_url: affiliateUrl('Campagnolo+Super+Record+12s+Ergopower') },
  { id: 'campy-sr12-rd', groupset_id: 'campagnolo-super-record-12s', category: 'rear_derailleur', name: 'Campagnolo Super Record 12s Rear Derailleur', model_number: 'RD-SR512', price_eur: 399, affiliate_url: affiliateUrl('Campagnolo+Super+Record+12s+rear+derailleur') },
  { id: 'campy-sr12-fd', groupset_id: 'campagnolo-super-record-12s', category: 'front_derailleur', name: 'Campagnolo Super Record 12s Front Derailleur', model_number: 'FD-SR512', price_eur: 219, affiliate_url: affiliateUrl('Campagnolo+Super+Record+12s+front+derailleur') },
  { id: 'campy-sr12-cassette', groupset_id: 'campagnolo-super-record-12s', category: 'cassette', name: 'Campagnolo Super Record N3W Cassette 11-29', model_number: 'CS-SR512', price_eur: 229, affiliate_url: affiliateUrl('Campagnolo+Super+Record+12s+cassette+N3W') },
  { id: 'campy-sr12-chain', groupset_id: 'campagnolo-super-record-12s', category: 'chain', name: 'Campagnolo Super Record 12s Chain', model_number: 'CN-SR512', price_eur: 89, affiliate_url: affiliateUrl('Campagnolo+Super+Record+12s+chain') },
  { id: 'campy-sr12-crankset', groupset_id: 'campagnolo-super-record-12s', category: 'crankset', name: 'Campagnolo Super Record 12s Crankset 52/36', model_number: 'FC-SR512', price_eur: 699, affiliate_url: affiliateUrl('Campagnolo+Super+Record+12s+crankset') },
  { id: 'campy-sr12-bb', groupset_id: 'campagnolo-super-record-12s', category: 'bottom_bracket', name: 'Campagnolo Ultra-Torque BSA Bottom Bracket', model_number: 'BB-UT-BSA', price_eur: 49, affiliate_url: affiliateUrl('Campagnolo+Ultra-Torque+BSA') },
  { id: 'campy-sr12-brake', groupset_id: 'campagnolo-super-record-12s', category: 'brake_caliper', name: 'Campagnolo Super Record 12s Brake Caliper', model_number: 'BR-SR512', price_eur: 299, affiliate_url: affiliateUrl('Campagnolo+Super+Record+12s+brake') },
  { id: 'campy-sr12-bl', groupset_id: 'campagnolo-super-record-12s', category: 'brake_lever', name: 'Campagnolo Super Record 12s Brake Lever', model_number: 'BL-SR512', price_eur: 249, affiliate_url: affiliateUrl('Campagnolo+Super+Record+12s+lever') },
];

export const getComponentsByGroupset = (groupsetId: string): Component[] =>
  components.filter((c) => c.groupset_id === groupsetId);

export const getComponentById = (id: string): Component | undefined =>
  components.find((c) => c.id === id);
