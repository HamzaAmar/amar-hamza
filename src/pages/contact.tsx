// import {
//   Call,
//   Email,
//   Facebook,
//   Github,
//   Instagram,
//   Linkdin,
//   Twitter,
// } from '@components/icons';
// import { Button, Input, TextArea } from '@components/ui';
// import React from 'react';
// import styles from '@styles/contact.module.css';
// import { Layout } from '@components/core';

// const contact = () => {
//   return (
//     <Layout>
//       <div className={styles.parent}>
//         <div className={styles.content}>
//           <div className={styles.left}>
//             <div>
//               <h1>get in touch</h1>
//               <p>Fill up this form and am gonna be happy to answer</p>
//             </div>
//             <div className={styles.infoContainer}>
//               <div className={styles.itemInfo}>
//                 <Call
//                   width={20}
//                   height={20}
//                   fill="var(--color-primary-light)"
//                 />
//                 <div className={styles.infoParagraph}>
//                   +212 6 3037 1320
//                 </div>
//               </div>
//               <div className={styles.itemInfo}>
//                 <Email
//                   width={20}
//                   height={20}
//                   fill="var(--color-primary-light)"
//                 />
//                 <div className={styles.infoParagraph}>
//                   hamzamiloudamar@gmail.com
//                 </div>
//               </div>
//               <div className={styles.itemInfo}>
//                 <Call
//                   width={20}
//                   height={20}
//                   fill="var(--color-primary-light)"
//                 />
//                 <div className={styles.infoParagraph}>
//                   Morocco Marrakesh
//                 </div>
//               </div>
//             </div>
//             <div className={styles.socialContainer}>
//               <Facebook width={25} height={25} />
//               <Twitter width={25} height={25} />
//               <Instagram width={25} height={25} />
//               <Github width={25} height={25} />
//               <Linkdin width={25} height={25} />
//             </div>
//           </div>
//           <div className={styles.right}>
//             <div>
//               <Input
//                 name="name"
//                 label="Name"
//                 placeholder="type your name"
//               />
//             </div>
//             <div>
//               <Input
//                 name="email"
//                 label="Email"
//                 type="email"
//                 // leftIcon={}
//                 placeholder="type your name"
//               />
//             </div>
//             <div>
//               <Input
//                 name="subject"
//                 label="Subject"
//                 placeholder="type your name"
//               />
//             </div>
//             <div>
//               <TextArea
//                 name="subject"
//                 label="Subject"
//                 placeholder="type your name"
//               />
//             </div>
//             <div>
//               <Button size="fluid">Contact Me</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default contact;

import { Layout } from '@components/core';
import {
  Call,
  Email,
  Facebook,
  Github,
  Instagram,
  Linkdin,
  Twitter,
} from '@components/icons';
import { Button, Input, TextArea } from '@components/ui';
import React from 'react';
import styles from '@styles/contact.module.css';

const contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titleContainer}>
            <h1 className={styles.heading}>get in touch</h1>

            <p className={styles.paragraph}>
              Fill up this form and am gonna be happy to answer
            </p>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.itemInfo}>
              <Call
                width={20}
                height={20}
                fill="var(--color-primary-light)"
              />
              <div className={styles.infoParagraph}>
                +212 6 3037 1320
              </div>
            </div>
            <div className={styles.itemInfo}>
              <Email
                width={20}
                height={20}
                fill="var(--color-primary-light)"
              />
              <div className={styles.infoParagraph}>
                hamzamiloudamar@gmail.com
              </div>
            </div>
            <div className={styles.itemInfo}>
              <Call
                width={20}
                height={20}
                fill="var(--color-primary-light)"
              />
              <div className={styles.infoParagraph}>
                Morocco Marrakesh
              </div>
            </div>
          </div>
          <div className={styles.socialContainer}>
            <Facebook width={25} height={25} />
            <Twitter width={25} height={25} />
            <Instagram width={25} height={25} />
            <Github width={25} height={25} />
            <Linkdin width={25} height={25} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.inputContainer}>
            <Input
              name="name"
              label="Name"
              placeholder="type your name"
            />
          </div>
          <div className={styles.inputContainer}>
            <Input
              name="email"
              label="Email"
              type="email"
              // leftIcon={}
              placeholder="type your name"
            />
          </div>
          <div className={styles.inputContainer}>
            <Input
              name="subject"
              label="Subject"
              placeholder="type your name"
            />
          </div>
          <div className={styles.inputContainer}>
            <TextArea
              name="subject"
              label="Subject"
              placeholder="type your name"
            />
          </div>
          <div className={styles.inputContainer}>
            <Button size="fluid">Contact Me</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
