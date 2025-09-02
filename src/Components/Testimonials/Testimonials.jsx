import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideforward = () => {
        if (tx > -50) {
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slidebackward = () => {
        if (tx < 0) {
          tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideforward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slidebackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div>
                <img src={user1} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Edusity</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                eveniet veritatis libero enim ducimus eaque adipisci, fugit unde
                neque delectus temporibus minima, commodi perferendis a magnam
                aperiam iste ea aspernatur earum! Delectus quidem non labore
                amet quaerat? Et nesciunt similique eius neque est deserunt
                velit, nulla, ducimus, in doloribus autem! Soluta dolores
                voluptatibus nihil quidem rem itaque voluptas facilis, quam
                dolorum, perferendis pariatur repellat laborum! Quisquam iste
                rerum delectus, quod aspernatur autem repudiandae. Dignissimos
                illo fugiat labore? Voluptatem accusantium harum provident,
                libero dolore commodi, odio at animi unde quaerat autem ab
                ratione. Est obcaecati, officia saepe eum nemo dolores deleniti.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div>
                <img src={user2} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Edusity</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                eveniet veritatis libero enim ducimus eaque adipisci, fugit unde
                neque delectus temporibus minima, commodi perferendis a magnam
                aperiam iste ea aspernatur earum! Delectus quidem non labore
                amet quaerat? Et nesciunt similique eius neque est deserunt
                velit, nulla, ducimus, in doloribus autem! Soluta dolores
                voluptatibus nihil quidem rem itaque voluptas facilis, quam
                dolorum, perferendis pariatur repellat laborum! Quisquam iste
                rerum delectus, quod aspernatur autem repudiandae. Dignissimos
                illo fugiat labore? Voluptatem accusantium harum provident,
                libero dolore commodi, odio at animi unde quaerat autem ab
                ratione. Est obcaecati, officia saepe eum nemo dolores deleniti.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div>
                <img src={user3} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Edusity</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                eveniet veritatis libero enim ducimus eaque adipisci, fugit unde
                neque delectus temporibus minima, commodi perferendis a magnam
                aperiam iste ea aspernatur earum! Delectus quidem non labore
                amet quaerat? Et nesciunt similique eius neque est deserunt
                velit, nulla, ducimus, in doloribus autem! Soluta dolores
                voluptatibus nihil quidem rem itaque voluptas facilis, quam
                dolorum, perferendis pariatur repellat laborum! Quisquam iste
                rerum delectus, quod aspernatur autem repudiandae. Dignissimos
                illo fugiat labore? Voluptatem accusantium harum provident,
                libero dolore commodi, odio at animi unde quaerat autem ab
                ratione. Est obcaecati, officia saepe eum nemo dolores deleniti.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div>
                <img src={user4} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Edusity</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                eveniet veritatis libero enim ducimus eaque adipisci, fugit unde
                neque delectus temporibus minima, commodi perferendis a magnam
                aperiam iste ea aspernatur earum! Delectus quidem non labore
                amet quaerat? Et nesciunt similique eius neque est deserunt
                velit, nulla, ducimus, in doloribus autem! Soluta dolores
                voluptatibus nihil quidem rem itaque voluptas facilis, quam
                dolorum, perferendis pariatur repellat laborum! Quisquam iste
                rerum delectus, quod aspernatur autem repudiandae. Dignissimos
                illo fugiat labore? Voluptatem accusantium harum provident,
                libero dolore commodi, odio at animi unde quaerat autem ab
                ratione. Est obcaecati, officia saepe eum nemo dolores deleniti.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials
