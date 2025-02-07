import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const faqs = [
  {
    question: "The quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    question: "The quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    question: "The quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    question: "The quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    question: "The quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    question: "The quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
];

const PricingFAQs = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">Pricing FAQs</h2>
      <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
        Problems trying to resolve the conflict between the two major realms of Classical physics.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="flex items-start space-x-3 text-left">
            <FaChevronRight className="text-blue-500 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{faq.question}</h4>
              <p className="text-gray-500 mt-1">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-gray-600">
        Have not got your answer? <span className="text-blue-500 cursor-pointer">Contact our support</span>
      </p>
      <div className="flex space-x-4 justify-center items-center pt-4">
                <a href="#" className="text-blue-500 text-xl">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-blue-500 text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-blue-400 text-xl">
                  <FaTwitter />
                </a>
                <a href="#" className="text-blue-400 text-xl">
                  <FaLinkedin />
                </a>
              </div>
    </section>
  )}
   
  
  


export default PricingFAQs;
