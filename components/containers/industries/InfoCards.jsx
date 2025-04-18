import Image from "next/image";

const InfoCards = ({ infoCards }) => (
  <div className="row g-4 two-info-cards">
    {infoCards?.map((card, index) => (
      <div key={index} className="col-lg-6 col-md-6">
        <div className="info-card h-100">
          {card.image && (
            <div className="icon mb-4">
              <Image 
                src={card.image} 
                alt={`${card.title} icon`}
                width={100}
                height={100}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}
          <h4 className="title mb-3">{card.title}</h4>
          {card.description && (
            <p className="mb-4">{card.description}</p>
          )}
          {card.list && (
            <ul className="list-unstyled">
              {card.list.map((item, idx) => (
                <li key={idx} className="d-flex align-items-center mb-3">
                  <Image
                    src="/images/industry-icons/checkmark-icon.png"
                    alt={`${item} feature checkmark`}
                    width={20}
                    height={20}
                    style={{ flexShrink: 0 }}
                  />
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default InfoCards;