import React from 'react';
import { Container } from '@raketa-cms/raketa-cms';

const TextWidget = ({ variant, text, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="text">
      <div className="container">
        <div className="row">
          <div className={`col-${variant}`} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  </Container>
);

TextWidget.title = 'Text';
TextWidget.category = 'General';
TextWidget.primaryField = 'variant';
TextWidget.dialogSize = 'large';

TextWidget.defaults = {
  variant: 8,
  text: '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti sunt inventore at, eligendi quisquam modi ea earum asperiores libero quos reiciendis impedit placeat! Nesciunt sit consectetur vitae dignissimos deserunt.</p>',
  containerSettings: {},
};

TextWidget.adminFields = {
  variant: { "type": "select", "options": [["6", "6 Columns"], ["8", "8 columns"], ["12", "12 columns"]] },
  text: { "type": "rich" },
};

export default TextWidget;
