import * as fs from 'fs';

const cv = `\
<div style="font-size: 20px; font-weight: bold;">
自己PR
</div>
` + `\
<div style="font-size: 30px;">
フロントエンド開発責任者としてさまざまなプロジェクトに参画した。
Webアプリケーション・ブラウザ拡張機能・ネイティブアプリケーションを経験。
E2Eテスト、ユニットテスト、統合テストの基盤、AWS Amplifyでのインフラの構築。
Ruby on RailsやGoによるバックエンド開発を経験。
AWS、DynamoDB、Docker、Github、デザイン面ではFigmaなどのツールを使った開発経験。
`.split("\n").join("<br/>") + `\
<div style="page-break-before:always"></div>
`.split("\n").join("<br/>") + `\
得意なフェーズは0->1、1->10のフェーズ。
特に貢献できるのは、フロントエンド開発責任者としての経験。
バックエンド、インフラも通して開発した経験があるため、フロントエンドだけでなく、バックエンドやインフラの開発にも貢献できる。
簡単な画面であればプロトタイプ作成から。複雑な画面はFigmaでのデザインからといった切り替えを行う。
自分しかやれる人がいない状況での開発経験が多い。広くできるが専門の人がいる場合は、専門の人にお任せしたい。
もちろん、自分だけでも広く開発できる。
</div>`.split("\n").join("<br/>")

fs.writeFileSync("SELF_PROMOTION.md", cv, "utf-8");
