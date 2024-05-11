# 課題6: 音声認識

⏲️ _完了までの時間: 30 min._ ⏲️

## このパートで学ぶこと 🎯

- Azure AI servicesをアプリと接続します
- Pass the API key to you app using GitHub Secrets
- GitHub Secrets を使用してAPIキーをアプリに渡します
- アプリで音声認識の機能が使えるのを確認します


### 参考情報

- [Resource / Resource Group / Subscription とは](https://docs.microsoft.com/azure/cloud-adoption-framework/govern/resource-consistency/resource-access-management)
- [Speech API](https://azure.microsoft.com/services/cognitive-services/speech-services/#overview)
- [可用性ゾーンとは](https://docs.microsoft.com/azure/availability-zones/az-overview)
- [GitHub Encrypted secrets](https://docs.GitHub.com/en/actions/reference/encrypted-secrets)



## Azure AI servicesの資格情報をGithub Secretに統合します

[オブジェクト認識](../Vision/README.md)で作成したのと同じAzure AI servicesを使用します

このリソースの情報をWebアプリと共有して、Speech Serviceを利用できるようにする必要があります。したがって、別のGitHub Secretを作成し、これをアプリと共有します。

ブラウザでGitHubのリポジトリを開きます。**GitHub -> Settings -> Secrets -> Actions** に移動し、**`New repository secret`** を追加します。

  次のシークレットを追加します。
  |Name|Value|
  |-|-|
  |VITE_SPEECH_API_KEY|Azure AI servicesのKey|

  ![Screenshot of creating secret](./images/light/vue-app-speech-api-key-secret.png)


## フロントエンドパイプラインを再実行します

フロントエンドで登録したシークレットを追加するには、ビルドパイプラインを再度実行する必要があります。

- **Actions -> Pages** を開き **Run workflow** に移動します。
  ![Run a workflow](./images/light/runworkflow.png)
  ![Run all jobs](./images/light/rerunalljobs.png)

パイプラインの下にデプロイステップの下に表示されるフロントエンドのURLリンクをクリックするか、スマートフォンでアプリを更新します。

`https://<ご自身のGitHubアカウント名>.github.io/everyonecancode`

フロントエンドアプリケーションには、英語とドイツ語でアプリと通信し、音声を入力できるマイクボタンが表示されます。

:computer: この機能ではマイクから入力されたデータは保存されず、タイムラインやニュースフィードに表示されません。


## あなたの音声はテキストに文字起こしされますか？

アプリになにかを喋ってみて、その内容が正しく認識されているかテキストで確認してみましょう。
その精度に驚かれるかもしれません:heart_eyes:


なお、デフォルトでは、ドイツ語と英語のみに対応しています。言語を変更したい場合は、**`Frontend` -> `src` -> `views` -> `Microphone.vue`** を変更します。

例えば日本語を追加する場合は、以下のように変更します。

```html
<select name="lang" @change="onChange($event)" class="custom-select">
  <option value="de-DE" selected>German</option>
  <option value="en-US">English</option>
  <option value="ja-JP">日本語</option>
</select>
```

設定できる言語は[こちら](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support) から確認できます。


:bulb: もしうまく動かなかったチームは サンプルの[Milligramアプリケーション](https://codeunicornmartha.github.io/FemaleAIAppInnovationEcosystem/#/?stack-key=a78e2b9a)で動作を見てください。


### Next Acrion！

おつかれさまでした！！

今すぐコーディングを開始するか、Udacity、Udemy、PluralSight、EDXなどを使用してAzure認定試験にチャレンジしてみてください。

  :::tip
  - [Programming course on Udacity](https://www.udacity.com/course/intro-to-programming-nanodegree--nd000)
  - [Microsoft Azure AI Fundamentals learning path (with optional certification)](https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/)
  - [Microsoft Azure Fundamentals learning path (with optional certification)](https://learn.microsoft.com/en-gb/certifications/exams/az-900)
  :::

また、興味がある人はMicrosoftのキャリアサイトもチェックしてください。

- [Microsoft Aspire Program for early in career hires](https://www.microsoft.com/en-ie/earlycareers/aspire-program)
- Internships at MS
- [Professional Careers at Microsoft](https://careers.microsoft.com/)
