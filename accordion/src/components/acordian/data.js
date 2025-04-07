const data = [
    {
      id: "1",
      question: "What is an accordion?",
      answer: "An accordion is a UI component that allows users to expand and collapse sections of content, typically used in FAQs or to display hierarchical information in a compact space."
    },
    {
      id: "2",
      question: "How does an accordion work?",
      answer: "An accordion works by showing only the section headers initially. When a user clicks on a header, the corresponding content expands while other sections may collapse (depending on implementation)."
    },
    {
      id: "3",
      question: "When should I use an accordion?",
      answer: "Accordions are best used when you have multiple sections of content but want to save space and reduce scrolling. They're commonly used for FAQs, product descriptions with multiple features, or any content that can be neatly categorized."
    },
    {
      id: "4",
      question: "What are the accessibility considerations for accordions?",
      answer: "Accordions should be keyboard navigable, have proper ARIA attributes (aria-expanded, aria-controls), and clearly indicate their expandable/collapsible nature. The content should remain accessible to screen readers in both expanded and collapsed states."
    },
    {
      id: "5",
      question: "Can multiple accordion items be open at once?",
      answer: "This depends on the implementation. Some accordions allow multiple items to be open simultaneously, while others automatically close the previously opened item when a new one is clicked (sometimes called an 'accordion menu' pattern)."
    }
  ];

  export default data;
  