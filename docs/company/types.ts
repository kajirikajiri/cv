/**
 * ruby %w like
 * @example
 * W<"a|b|c"> // "a" | "b" | "c"
 * W<"a-b-c", "-"> // "a" | "b" | "c"
 */
type W<S extends string, D extends string = "|"> = 
  S extends `${infer T}${D}${infer Rest}` ? T | W<Rest, D> : S;

export type CurriculumVitae = {
	companyName: W<"株式会社onetap"> // 会社名
	employmentType: W<"正社員"> // 雇用形態
	companyOverview: string // 会社概要
	enrollmentPeriod: string // 在籍期間
	projects: ReadonlyArray<Project>
}

type ProgramLanguages = W<"TypeScript|JavaScript|Ruby|Dart|Go">
type FrameworksAndOthers = W<"React|Next.js|Material UI|Gatsby|Vue|Yup|Vite|Jest|Puppeteer|Cypress|Playwright|React Testing Library|Rspec|Ruby on Rails|Flutter|React Native|Docker|Github|Figma|AWS S3|AWS Amplify|AWS Lambda|AWS Route53|AWS System Manager|AWS CloudWatch|AWS EC2|AWS WAF & Shield|Nuxt|testify|AWS DynamoDB|Dynamoid|Slack|Sentry|GPT-4|DeepL|Notion|Zoom|SequelAce|SequelPro|Postman|Google Chrome|Microsoft Edge|Miro">
type OS = W<"Windows|MacOS|Linux">

export type Project = {
	readonly title: string
	readonly summary: string // 概要
	phase: ReadonlyArray<W<"要件定義|基本設計|詳細設計|単体テスト|結合テスト|運用保守">> // 担当フェーズ
	responsibilities: ReadonlyArray<W<"担当者へのヒアリング|仕様書作成|システムの設計|開発|導入|テスト|運用|保守メンテナンス">> // 業務内容
	readonly achievements: string // 実績
	languages: ReadonlyArray<ProgramLanguages> // 使用言語
	frameworksAndOthers: ReadonlyArray<FrameworksAndOthers> // 使用フレームワークなど
	os: ReadonlyArray<OS> // OS
	readonly teamSize: string // チーム人数
	readonly role: string // 役割
	readonly dates: string // 期間
}

type UnionToTechnicalSkill<T extends string> = {
  [K in T]: {
		usageMonth: number;
		level: W<"要件に応じた環境設計・構築が可能|最適なコード記述と、指示、改修が可能|最適なコード記述と、改修が可能|コード記述と、改修が可能|UI上で操作や設定が可能">;
	}
};

export type TechnicalSkills = {
	os: UnionToTechnicalSkill<OS>
	programLanguages: UnionToTechnicalSkill<ProgramLanguages>
	frameworksAndOthers: UnionToTechnicalSkill<FrameworksAndOthers>
}

