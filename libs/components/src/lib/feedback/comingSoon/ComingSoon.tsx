import { WarningTwoIcon } from '@chakra-ui/icons';
import PageLayout from '../../layout/page-layout/PageLayout';
import SectionHeader from '../../layout/section-header/SectionHeader';
import Section from '../../layout/section/Section';
import EmptyState from '../emptyState/EmptyState';

export function ComingSoon() {
  return (
    <Section data-testid="coming-soon">
      <EmptyState title="Coming Soon" icon={<WarningTwoIcon />} />
    </Section>
  );
}

export interface ComingSoonPageProps {
  title: string;
}

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <PageLayout>
      <SectionHeader title={title} />
      <ComingSoon />
    </PageLayout>
  );
}

export default ComingSoonPage;
