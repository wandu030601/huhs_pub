import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Banknote, Clock, DoorOpen } from "lucide-react";
import { image } from "framer-motion/client";

const rules = [
  { icon: <Banknote size={20} />, title: "모든 메뉴는 선불입니다" },
  { icon: <Clock size={20} />, title: "이용 시간은 2시간입니다" },
  { icon: <DoorOpen size={20} />, title: "자리를 15분 이상 비우면 퇴장으로 간주됩니다" },
  { icon: <AlertCircle size={20} />, title: "결제는 계좌이체만 가능합니다" },
];

const orderRules = [
  { people: "2~3인", order: "메인 메뉴 1개 이상" },
  { people: "4인 이상", order: "메인 메뉴 2개 이상" },
];

const menuSections = [
  {
    title: "메인 메뉴",
    items: [
      { name: "제육볶음", price: "16,000원", imageText: "제육볶음 사진", image: "/images/jeyuk.png" },
      { name: "모듬전", price: "16,000원", imageText: "모듬전 사진", image: "/images/jeon.png" },
      { name: "오뎅탕", price: "14,000원", imageText: "오뎅탕 사진", image: "images/odeng.png"},
    ],
  },
  {
    title: "사이드",
    items: [
      { name: "참치마요주먹밥", price: "8,000원", imageText: "참치마요주먹밥 사진", image: "/images/tuna.png"},
      { name: "계란찜", price: "8,000원", imageText: "계란찜 사진" , image: "images/egg.png"},
      { name: "황도", price: "8,000원", imageText: "황도 사진" , image: "images/peach.png"},
      { name: "컵라면", price: "4,000원", imageText: "컵라면 사진", image: "images/shin.png"},
    ],
  },
  {
    title: "마실 것",
    items: [
      { name: "음료", price: "2,000원", imageText: "음료 사진" ,image: "images/drink.png"},
      { name: "물", price: "1,000원", imageText: "물 사진", image: "images/water.png"},
    ],
  },
];

export default function App() {
  return (
    <main className="page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #2b1a12;
        }

        .page {
          min-height: 100vh;
          padding: 24px 14px 42px;
          color: #2a170d;
          background:
            radial-gradient(circle at 15% 0%, rgba(255, 220, 159, 0.4), transparent 26%),
            radial-gradient(circle at 90% 12%, rgba(111, 64, 36, 0.42), transparent 28%),
            linear-gradient(135deg, #2b1a12 0%, #51301d 48%, #1d1009 100%);
        }

        .container {
          width: min(960px, 100%);
          margin: 0 auto;
        }

        .paper {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(87, 48, 24, 0.55);
          background:
            linear-gradient(rgba(255, 244, 220, 0.9), rgba(255, 244, 220, 0.9)),
            repeating-linear-gradient(45deg, rgba(74, 43, 22, 0.04) 0px, rgba(74, 43, 22, 0.04) 2px, transparent 2px, transparent 9px);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.35);
        }

        .paper::before,
        .paper::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 14px;
          background: repeating-linear-gradient(
            90deg,
            #5b2f18 0px,
            #5b2f18 24px,
            #c49a5a 24px,
            #c49a5a 34px,
            #7a4424 34px,
            #7a4424 58px
          );
          z-index: 1;
        }

        .paper::before { top: 0; }
        .paper::after { bottom: 0; }

        .hero {
          padding: 44px 28px 22px;
          text-align: center;
          border-bottom: 2px solid rgba(91, 47, 24, 0.2);
        }

        .label {
          display: inline-flex;
          padding: 8px 16px;
          border: 1px solid rgba(91, 47, 24, 0.34);
          border-radius: 999px;
          background: rgba(91, 47, 24, 0.08);
          color: #6b341b;
          font-size: 12px;
          font-weight: 1000;
          letter-spacing: 0.22em;
        }

        h1 {
          margin: 14px 0 0;
          color: #3a1f12;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 10vw, 82px);
          line-height: 0.95;
          font-weight: 1000;
          letter-spacing: -0.06em;
        }

        .hero-sub {
          margin: 14px 0 0;
          color: #805638;
          font-size: 15px;
          font-weight: 800;
        }

        .rules {
          padding: 24px 24px 8px;
        }

        .rules-title,
        .menu-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .rules-title::before,
        .rules-title::after,
        .menu-title::before,
        .menu-title::after {
          content: "";
          width: 42px;
          height: 1px;
          background: rgba(91, 47, 24, 0.4);
        }

        .rules-title h2,
        .menu-title h2 {
          margin: 0;
          color: #3a1f12;
          font-size: 24px;
          font-weight: 1000;
          letter-spacing: -0.04em;
        }

        .rules-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .order-note {
          margin-top: 16px;
          padding: 18px;
          border: 1px solid rgba(91, 47, 24, 0.22);
          border-radius: 18px;
          background: rgba(91, 47, 24, 0.08);
        }

        .order-note-title {
          margin: 0 0 12px;
          color: #3a1f12;
          font-size: 17px;
          font-weight: 1000;
          letter-spacing: -0.035em;
        }

        .order-note-title span {
          color: #7a2e16;
        }

        .order-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .order-item {
          padding: 13px 10px;
          border: 1px solid rgba(91, 47, 24, 0.18);
          border-radius: 14px;
          background: rgba(255, 252, 242, 0.55);
          text-align: center;
        }

        .order-people {
          color: #805638;
          font-size: 13px;
          font-weight: 900;
        }

        .order-menu {
          margin-top: 5px;
          color: #2f190e;
          font-size: 15px;
          font-weight: 1000;
          line-height: 1.3;
        }

        .rule-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          border: 1px solid rgba(91, 47, 24, 0.2);
          border-radius: 16px;
          background: rgba(255, 252, 242, 0.52);
        }

        .rule-icon {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          border-radius: 14px;
          color: #fff4dc;
          background: #6b341b;
        }

        .rule-item p {
          margin: 0;
          color: #3a1f12;
          font-size: 15px;
          font-weight: 950;
          line-height: 1.35;
        }

        .menus {
          padding: 10px 24px 34px;
        }

        .menu-section {
          margin-top: 28px;
        }

        .menu-title {
          margin-bottom: 16px;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .menu-card {
          overflow: hidden;
          border: 1px solid rgba(91, 47, 24, 0.22);
          border-radius: 18px;
          background: rgba(255, 252, 242, 0.64);
          box-shadow: 0 14px 28px rgba(69, 37, 20, 0.12);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .menu-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 36px rgba(69, 37, 20, 0.18);
        }

        .photo-box {
          display: grid;
          place-items: center;
          height: 150px;
          border-bottom: 1px solid rgba(91, 47, 24, 0.18);
          color: #8b684e;
          background:
            linear-gradient(135deg, rgba(107, 52, 27, 0.09), rgba(196, 154, 90, 0.15)),
            #f8ead0;
          font-size: 14px;
          font-weight: 900;
          overflow: hidden;
        }

        .menu-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .menu-info {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          padding: 16px;
        }

        .menu-name {
          margin: 0;
          color: #2f190e;
          font-size: 21px;
          line-height: 1.15;
          font-weight: 1000;
          letter-spacing: -0.045em;
        }

        .menu-price {
          flex: 0 0 auto;
          color: #7a2e16;
          font-size: 19px;
          font-weight: 1000;
          letter-spacing: -0.035em;
        }

        footer {
          padding: 4px 24px 38px;
          text-align: center;
        }

        footer p {
          display: inline-flex;
          margin: 0;
          padding: 11px 18px;
          border-radius: 999px;
          border: 1px solid rgba(91, 47, 24, 0.22);
          background: rgba(91, 47, 24, 0.08);
          color: #6b341b;
          font-size: 14px;
          font-weight: 900;
        }

        @media (max-width: 820px) {
          .menu-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .page {
            padding: 16px 10px 30px;
          }

          .hero {
            padding: 40px 18px 20px;
          }

          .rules,
          .menus {
            padding-left: 14px;
            padding-right: 14px;
          }

          .rules-grid,
          .menu-grid,
          .order-grid {
            grid-template-columns: 1fr;
          }

          .photo-box {
            height: 180px;
          }

          .menu-info {
            align-items: center;
          }
        }
      `}</style>

      <div className="container">
        <div className="paper">
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="hero"
          >
            <div className="label">HUHS PUB</div>
            <h1>주점 메뉴판</h1>
            <p className="hero-sub">주문 전 이용 안내을 확인해주세요</p>
          </motion.header>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rules"
          >
            <div className="rules-title">
              <h2>이용 안내</h2>
            </div>

            <div className="rules-grid">
              {rules.map((rule, index) => (
                <motion.div
                  key={rule.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.32, delay: 0.12 + index * 0.04 }}
                  className="rule-item"
                >
                  <div className="rule-icon">{rule.icon}</div>
                  <p>{rule.title}</p>
                </motion.div>
              ))}
            </div>

            <div
              style={{
              marginTop: "12px",
              padding: "14px",
              borderRadius: "14px",
              backgroundColor: "#fff7e8",
              border: "1px solid #e3c9a6",
              textAlign: "center",
              fontWeight: "700",
              color: "#4a2415",
              }}
            >
  
              <div style={{ fontSize: "14px", marginBottom: "4px" }}>
                계좌번호
              </div>
              <div style={{ fontSize: "18px", fontWeight: "900" }}>
                카카오뱅크 7942-33-15855
              </div>
            </div>

            <div className="order-note">
              <p className="order-note-title">
                인원수에 따라 <span>메인 메뉴 최소 주문 수량</span>이 적용됩니다.
              </p>
              <div className="order-grid">
                {orderRules.map((rule) => (
                  <div key={rule.people} className="order-item">
                    <div className="order-people">{rule.people}</div>
                    <div className="order-menu">{rule.order}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <section className="menus">
            {menuSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.16 + sectionIndex * 0.06 }}
                className="menu-section"
              >
                <div className="menu-title">
                  <h2>{section.title}</h2>
                </div>

                <div className="menu-grid">
                  {section.items.map((item) => (
                    <article key={item.name} className="menu-card">
                      <div className="photo-box">
                        {item.image ? (
                          <img className="menu-image" src={item.image} alt={item.name} />
                        ) : (
                          item.imageText
                        )}
                      </div>
                      <div className="menu-info">
                        <h3 className="menu-name">{item.name}</h3>
                        <div className="menu-price">{item.price}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </motion.div>
            ))}
          </section>

          <footer>
            <p>조리는 주문 순서대로 진행됩니다</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
