import { convertMonthsToYearsMonths, convertTechnicalSkillKey, onetapincjp, technicalSkills } from "./docs/company/onetapincjp";
import { summary } from "./docs/summary";
import * as fs from 'fs';

const today = new Date();
const date = today.getFullYear()+'年'+(today.getMonth()+1)+'月'+today.getDate()+'日現在';
const cv = `
<div class="cv-title">
職務経歴書
</div>
<div class="cv-date">
${date}
</div>
<div class="full-name">
氏名 中村一貴
</div>`
+
`
■職務要約
${summary.carrerSummary}
`.split("\n").join("<br/>")
+
`
■活かせる経験・知識・技術
${summary.transferableSkills}

`.split("\n").join("<br/>")
+
`■職務経歴
<table class="cv-table">
  <tr>
    <th colspan="2">${onetapincjp.enrollmentPeriod}&nbsp;&nbsp;&nbsp;${onetapincjp.companyName}</th>
  <tr/>
  <tr>
    <td>事業内容：${onetapincjp.companyOverview}</td>
    <td>${onetapincjp.employmentType}</td>
  </tr>
${onetapincjp.projects.map(project => {
	const left = `\
【プロジェクト概要】
${project.summary}

【担当フェーズ】
${project.phase.join("、")}

【業務内容】
${project.responsibilities.join("、")}

【実績・取り組み】
${project.achievements}\
`.split("\n").join("<br/>")

	const center = `\
【チーム人数】
${project.teamSize}

【役割】
${project.role}

【言語】
${project.languages.join("、")}

【フレームワーク・その他】
${project.frameworksAndOthers.join("、")}

【OS】
${project.os.join("、")}\
`.split("\n").join("<br/>")

	return `
  <tr class="cv-table-subheader">
    <td>${project.dates} &nbsp;&nbsp; ／ &nbsp;&nbsp; ${project.title}</td>
    <td>規模・開発環境</td>
  </tr>
  <tr>
    <td>${left}</td>
    <td>${center}</td>
  </tr>
`}).join("\n")}
</table>
<br/>
` + `
■テクニカルスキル
<table class="skill-table">
  <tr>
    <th style="width: 35%;" colspan="2">種類</th>
    <th style="width: 15%;">使用期間</th>
    <th style="width: 50%;">レベル</th>
  </tr>
${(Object.keys(technicalSkills) as Array<keyof typeof technicalSkills>).map((key) => {
    return Object.entries(technicalSkills[key]).map(([k, v], i) => {
      const {years, months} = convertMonthsToYearsMonths(v.usageMonth)
      return `<tr>`
      +
        (i == 0 ? `<td rowspan="${Object.keys(technicalSkills[key]).length}" >${convertTechnicalSkillKey(key)}</td>` : "")
      +
        `<td>${k}</td>
        <td>${years}年${months}ヶ月</td>
        <td>${v.level}</td>
      </tr>`
    }).join("")
  }).join("")}
</table>
` + `
■自己PR
${summary.selfPromotion}`.split("\n").join("<br/>")
+
`https://google.com`

fs.writeFileSync("README.md", cv, "utf-8");
