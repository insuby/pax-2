import './styles.scss';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

export const Solution = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="solution" className="solution">
      <div className="solution__tab">
        <p className="section-header section-header_desktop"><b>Решение</b><br />
          разработано <br />
          для:</p>
        <p className="section-header section-header_mobile"><b>Решение</b><br /> разработано для:</p>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="solution-tabs__desktop"
        >
          <Tab label="Учреждения" {...a11yProps(0)} />
          <Tab label="Пациентов" {...a11yProps(1)} />
          <Tab label="Персонала" {...a11yProps(2)} />
        </Tabs>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="solution-tabs__mobile"
        >
          <Tab label="Учреждения" {...a11yProps(0)} />
          <Tab label="Пациентов" {...a11yProps(1)} />
          <Tab label="Персонала" {...a11yProps(2)} />
        </Tabs>
      </div>
      <div className="solution__tab">
        <TabPanel value={value} index={0} />
        <TabPanel value={value} index={1} />
        <TabPanel value={value} index={2} />
      </div>
    </section>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{
        display: value !== index ? 'none' : 'block',
      }}
      // hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={`solution__tab-content solution__tab-content_${index + 1}`}
      {...other}
    />
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}