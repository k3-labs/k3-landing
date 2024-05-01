import arrowUp from '@/components/icons/arrow-up.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Legal() {
  return (
    <div className="px-12 py-6  text-gray-300 overflow-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-700 h-screen  ">
      <Link
        href="/"
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md outline outline-darkGray  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blackLight "
      >
        <Image
          src={arrowUp}
          alt="arrow"
          className="h-4 w-4  rotate-[270deg] "
        />{' '}
        Back to Home
      </Link>
      <article className="max-w-6xl py-8 mx-auto  prose prose-invert">
        <h1>BETA TESTING TERMS OF SERVICE</h1>
        <h4>
          BY CLICKING ON THE "YES" OR “I ACCEPT” BUTTON (OR OTHER BUTTON OR
          MECHANISM DESIGNED TO ACKNOWLEDGE AGREEMENT TO THE TERMS OF THIS
          AGREEMENT), OR BY ACCESSING OR USING THE BETA SERVICE, YOU ARE
          CONSENTING TO BE BOUND BY THIS AGREEMENT.
        </h4>
        <h4 className=" mt-[1em] mb-[3em]">
          This Beta Test Agreement (the “Agreement”) is by and between K3 Labs,
          Inc. and its affiliates (collectively, “K3 Labs”) and you (“Licensee”
          or “You”).
        </h4>
        <h2>1. “Beta Service”</h2>
        <p>
          Shall mean those products, software, services, and/or features that
          are designated as Beta or pre-release versions of the K3 Labs Platform
          and are provided to You during the term hereof. The Beta Service may
          contain bugs, errors, and other problems. You assume all risks and all
          costs associated with Your use of the Beta Service, including, without
          limitation, any Internet access fees, back-up expenses, costs incurred
          for the use of Your device and peripherals, lost profits, losses due
          to failed or defective transactions, any damage to equipment,
          software, information or data, and any other damages or losses that
          may arise from the Beta Service. K3 Labs is not obligated to provide
          any maintenance, technical or other support for the Beta Service.
        </p>
        <h2>2. License</h2>
        <p>
          K3 Labs grants to You a non-exclusive, non-transferable,
          non-sublicensable license to use the Beta Service solely for the
          purposes of testing, research, and evaluation of the Beta Service by
          K3 Labs. You shall not modify, disassemble, decompile, reverse
          engineer, rent, lease, loan, transfer, or make copies of the Beta
          Service. You agree to only use the Beta Service in accordance with the
          K3 Labs Terms of Service and Privacy Policy. The K3 Labs Terms of
          Service are incorporated by reference and will control for any
          provisions not addressed in this Agreement.
        </p>
        <h2>3. Ownership</h2>
        <p>
          All title, interest, and ownership rights in and to the Beta Service
          and associated documentation, including any improvements,
          modifications, and enhancements made thereto, are and shall remain in
          K3 Labs or K3 Labs’s partners. Except for those rights expressly
          granted herein, no other rights are granted, either express or
          implied, to You.
        </p>
        <h2>4. Confidentiality</h2>
        <p>
          The Beta Service, the fact of its existence, all accompanying
          documentation, and all information disclosed by K3 Labs to You
          hereunder or otherwise in connection with the Beta Service, including
          without limitation this Agreement, performance data, features and
          other information relating to or obtained from the Beta Service, is
          “Confidential Information” of K3 Labs. You will not use the
          Confidential Information except as necessary under this Agreement and
          will not disclose any portion of the Confidential Information to any
          other person or entity. You will use all reasonable steps to protect
          the Confidential Information from unauthorized use or disclosure.
          Confidential Information does not include information that: (1) was
          rightfully known by You at the time of disclosure without an
          obligation of confidentiality, (2) is lawfully obtained by You from a
          third party without restriction on use or disclosure, or (3) is or
          becomes generally known to the public through no fault or breach of
          this Agreement by You.
        </p>

        <h2>5. Modification and Termination</h2>
        <p>
          K3 Labs reserves the right to modify or terminate the Beta Service, or
          Your use thereof, to limit or deny access to the Beta Service, at any
          time, in our sole discretion, for any reason, with or without notice
          and without liability to You. This Agreement shall terminate upon the
          earlier of (1) termination of this Agreement by K3 Labs, for any
          reason or no reason, by written notice to You, (2) termination of the
          provision of the Beta Services to You, and (3) the release by K3 Labs
          of a publicly available version of the Beta Service. Your breach of
          any of Your obligations under this Agreement may result in Your
          immediate termination from use of the Beta Service. K3 Labs does not
          guarantee that any such publicly available version will be released.
        </p>
        <h2>6. Data & Feedback</h2>
        <p>
          Data & Feedback. You agree that K3 Labs may obtain information and
          data from You in connection with Your registration, installation, and
          use of the Beta Service including, without limitation, personal
          information. K3 Labs may also collect and process technical and
          performance information about Your use of the Beta Service and use
          this information to support and troubleshoot issues, provide updates,
          analyze trends and improve K3 Labs products or services. K3 Labs shall
          be allowed to use such data and share such data with K3 Labs partners
          for the program purposes. You hereby consent to K3 Labs processing and
          transferring this information, including, if any, personal
          information, in conformity with the K3 Labs Privacy Policy, as updated
          from time to time. Further, You shall provide feedback to K3 Labs
          concerning the functionality and performance of the Beta Service from
          time to time as reasonably requested by K3 Labs, including, without
          limitation, identifying potential errors and improvements. You will
          also be invited to complete surveys regarding the Beta Service, which
          You agree to complete honestly and promptly. Feedback provided to K3
          Labs through any of the foregoing methods in connection with the Beta
          Service may be used by K3 Labs and its partners to improve or enhance
          products, services and/or features and, accordingly, K3 Labs shall own
          such feedback, and all rights therein, without restriction, and You
          shall have no rights, express or implied, thereto.
        </p>
        <h2>
          8. THE BETA SERVICE MAY CONTAIN ERRORS AND IS PROVIDED FOR LIMITED
          EVALUATION ONLY
        </h2>
        <p>
          THE BETA SERVICE IS PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND,
          WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. K3 LABS
          SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY,
          NONINFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE.
        </p>
        <h2>9. Liability</h2>
        <p>
          THE TOTAL LIABILITY OF K3 LABS ARISING OUT OF OR RELATED TO THIS
          AGREEMENT SHALL NOT EXCEED $100. IN NO EVENT SHALL K3 LABS HAVE
          LIABILITY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL
          DAMAGES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THESE
          LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL
          PURPOSE OF ANY LIMITED REMEDY.
        </p>
        <h2>10. Miscellaneous</h2>
        <p>
          This Agreement shall be governed by the laws of Delaware without
          reference to conflict of laws principles. You shall not assign this
          Agreement, directly or indirectly, by operation of law or otherwise,
          without the prior written consent of K3 Labs. You shall comply in all
          respects with all U.S. and foreign export and re-export laws and
          regulations applicable to the technology and documentation provided
          hereunder. This is the entire agreement between the parties relating
          to the subject matter hereof. No waiver or modification of this
          Agreement shall be valid unless in writing signed by each party. If
          any provision of this Agreement is held by a court of competent
          jurisdiction to be contrary to law, the remaining provisions of this
          Agreement shall remain in full force and effect.
        </p>
      </article>
    </div>
  )
}
