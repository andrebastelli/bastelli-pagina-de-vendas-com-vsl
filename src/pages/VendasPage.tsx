import {
  Header,
  HeroDirect,
  KeyPhrasesSection,
  ProblemSection,
  SolutionSection,
  CourseContentSection,
  EcommerceWheelSection,
  BonusSection,
  AudienceSection,
  OfferSection,
  FAQSection,
  FinalCTASection,
  Footer,
} from '@/components/landing'

export function VendasPage() {
  return (
    <>
      <Header />
      <main>
        <HeroDirect />
        <KeyPhrasesSection />
        <ProblemSection />
        <SolutionSection />
        <CourseContentSection />
        <EcommerceWheelSection />
        <BonusSection />
        <AudienceSection />
        <OfferSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
