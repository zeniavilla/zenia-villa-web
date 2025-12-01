import React from 'react';
import SectionTitle from '../section-title/section-title';

function Contact() {
  return (
    <div id="contact" className="max-w-4xl mx-auto px-4 py-8">
      <SectionTitle
        title="Contact"
        subtitle="Feel free to email me at:"
        link="mailto:zavilla90@gmail.com"
        linkText="zavilla90@gmail.com"
      />
    </div>
  );
}

export default Contact;
