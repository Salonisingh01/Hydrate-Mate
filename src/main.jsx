import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// import React, { use } from 'react'
// import { motion, useScroll } from 'framer-motion'; // Correct import!

// const App = () => {
//   const { scrollYProgress } = useScroll(); // Destructure from the returned object
//   //   // console.log(scrollYProgress);
//   return (
//     <>
// {/* 
//      <motion.div className="box" 
//     //  initial={{
//     //  x:0,
//     //  y:0
//     //  }}
//       animate={{
//         x:[0,800,800,0,0],
//         y:[0,0,500,500,0],
//         rotate:[0,360,0,-360,0]
        

//       }}
//       transition={{
//         duration:2,
//         delay:1
        
//       }}>
//       </motion.div> */}
//       {/* <motion.div className="circle" animate={{
//         x:300,
//         scale:0.5    //Sizing
//       }}
//       transition={{
//         duration:3
//       }}>
//         <motion.h1>Hello World</motion.h1>
//       </motion.div>

  
//        <motion.h1
//        animate={{
//          rotate:360,
//          scale :0.5
//        }}
//        transition={{
//         duration:3,
//         delay:2
//      }}>
//         Hello World</motion.h1> */}
//         {/* <motion.img 
//          animate={{
//           x:1000
//          }}
//          transition={{ 
//           duration:2,
//           delay:1,
//           repeat:Infinity,
//           repeatType:'mirror',
//           ease:'anticipate'}}
//         src="src/shinchan-removebg-preview.png" alt="" /> */}
//         {/* <motion.div drag 
//         // whileDrag={{
//         //   scale:0.5
//         // }} 
//         // dragConstraints={{
//         //   left:0,
//         //   top:0,
//         //   right:'1000',
//         //   bottom:'1000'
//         // }}
//         // dragDirectionLock = 'true'
//         // whileHover={{
//         //    backgroundColor:'green'
//         // }} 
//         // whileTap={{
//         //   scale:0.5
//         // }}
          
//         className="box">
        
//         </motion.div> */}

//         <div className='p-20 text-center text-white font-mono' >
//           <motion.div
//           style={{
//             scaleX:scrollYProgress,
//             scaleX: scrollYProgress,
//             position: 'fixed', // Make it fixed to the top
//             top: 0,
//             left: 0,
//             zIndex: 10, // Ensure it's above other content
//           }}
//            className="bg-blue-500 origin-left w-full rounded-full h-1 absolute top-0 left-0"></motion.div>

//            <h2 className='text-4xl font-bold mb-8'>Saloni Singh</h2> 

//            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae suscipit, voluptas similique tenetur assumenda dolores sed in ratione provident odio tempore repudiandae, dolor, saepe quo perspiciatis. Illum debitis modi hic?
//            Autem, laboriosam? Sit maiores nemo neque dignissimos cumque libero? Doloremque quibusdam iste, earum sint illo ab. Expedita quia, quos rem quisquam aperiam nihil saepe alias animi commodi ducimus, aliquid in?
//            Ipsum maiores error eum, ullam tenetur consequuntur ex cupiditate sunt quae nemo magni esse debitis asperiores hic consequatur in ratione quia. Sint explicabo temporibus quo ad et veniam commodi perspiciatis.
//            Corporis voluptatibus cum quaerat, expedita itaque adipisci laborum qui sapiente eligendi perferendis illum quod placeat ea reiciendis tempora, officiis excepturi dolor. Ducimus exercitationem inventore in corrupti, quos impedit at non?
//            Vitae reiciendis ducimus excepturi deleniti ex laboriosam quos harum eius nobis ipsam at atque nisi quo repellat cumque dicta reprehenderit veniam accusamus sapiente eligendi, illo illum assumenda. Quos, alias sunt!
//            <br></br>  <br></br>
//            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci non quidem, maiores obcaecati, minima impedit perspiciatis quo laboriosam ullam quaerat veniam magni officia temporibus ipsam sed vero? Mollitia, ipsa enim?
//            In ad dicta quod vitae, ullam illum pariatur eaque exercitationem. Aliquid inventore cumque accusantium omnis incidunt rerum necessitatibus excepturi deleniti nemo assumenda, obcaecati, sed iste ullam. Impedit sit facere harum.
//            Nam magni fuga possimus hic ipsa ad ducimus nostrum, quibusdam eligendi earum odio ratione aperiam consectetur esse at. Doloribus nemo cumque excepturi ipsa laudantium natus officia minus, atque sapiente perspiciatis.
//            Laborum commodi, dolorem aperiam nisi ullam consectetur unde deserunt at odit? Natus sint laboriosam molestiae nemo dolor, corrupti earum saepe nulla. Neque, obcaecati rem asperiores in consequuntur quo. Nostrum, vel!
//            Incidunt eaque rerum unde libero quaerat reiciendis aspernatur veritatis nam cupiditate eos quo assumenda, ducimus ad quos voluptatibus dignissimos est repellat aliquid nostrum? Cumque, unde numquam sint repudiandae minus accusantium.
//            <br></br>  <br></br>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!
//            <br></br>  <br></br>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!
//            <br></br>  <br></br>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!
//            <br></br>  <br></br>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!
//            <br></br>  <br></br>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!
//            <br></br>  <br></br>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!
//            <br></br>  <br></br>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!
//            <br></br>  <br></br>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!
//            <br></br>  <br></br>
//            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!
//            <br></br>  <br></br>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro minima cumque ullam? Repudiandae, itaque tempora eveniet odio at blanditiis? Dicta ducimus explicabo officiis ab asperiores? Quam modi earum rerum.
//            Sit, veniam omnis necessitatibus incidunt atque esse totam ducimus tempora, reprehenderit rem cum et exercitationem eum. Possimus quisquam placeat fugit nisi necessitatibus mollitia veniam nostrum repellendus veritatis! Odit, quia ea?
//            Facilis, nisi dolores? Tempora reprehenderit nam nostrum hic aspernatur soluta minima laudantium perferendis minus inventore, dolor laboriosam optio et veritatis eum eaque distinctio deserunt voluptatibus nemo, maxime expedita illum temporibus.
//            Magni quibusdam vero, tempora, saepe sapiente officia necessitatibus numquam animi eum sequi laboriosam porro, aliquam ab. Dolor, libero laboriosam debitis officiis, laborum inventore quidem voluptas amet, ea obcaecati aliquam recusandae.
//            Esse dolore quod magnam nesciunt, laboriosam nisi dignissimos amet eveniet iusto, quaerat error est pariatur saepe praesentium rerum atque. Possimus vitae facilis natus, consequatur animi qui similique quaerat molestiae amet!</p>
        
//         </div>
//  </>
//   )
// }

// export default App
