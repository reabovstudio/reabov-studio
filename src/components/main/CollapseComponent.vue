<template>
  <div class="container collapse" id="CollapseRef">
    <h2>Commonly asked questions</h2>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Why wouldn't I just hire a full-time designer?" name="1">
        <div>Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000,
          plus benefits (and good luck finding one available). Aside from that, you may not always have enough
          work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.
        </div>
        <div>With the monthly plan, you can pause and resume your subscription as often as you need to ensure
          you're only paying your designer when you have work available for them.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Is there a limit to how many requests I can have?" name="2">
        <div>Once subscribed, you're able to add as many design requests to your queue as you'd like,
          and they will be delivered one by one.
        </div>
      </el-collapse-item>
      <el-collapse-item title="How fast will I receive my designs?" name="3">
        <div>On average, most requests are completed in just two days or less. However, more complex requests can take
          longer.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Who are the designers?" name="4">
        <div>You might be surprised to hear this, but REABOV STUDIO is actually an agency of one.</div>
        <div>This means you'll work directly with me, founder of REABOV STUDIO.</div>
      </el-collapse-item>
      <el-collapse-item title="How does the pause feature work?" name="5">
        <div>We understand you may not have enough design work to fill up entire month.
          Perhaps you only have one or two design requests at the moment.
          That's where pausing your subscription comes in handy.

        </div>
        <div>Billing cycles are based on 31 day period. Let's say you sign up and use
          the service for 21 days, and then decide to pause your subscription.
          This means that the billing cycle will be paused and you'll
          have 10 days of service remaining to be used anytime in the future.
        </div>
      </el-collapse-item>
      <el-collapse-item title="What programs do you design in?" name="6">
        <div>Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe After Effects, Adobe Premiere, Blender, Z-Brush, Rhino,
          Matrix GemVision, Keyshot, Fl Studio.
        </div>
      </el-collapse-item>
      <el-collapse-item title="How do I request designs?" name="7">
        <div>REABOV STUDIO offers a lot of flexibility in how you request a design using Trello.
          Here are some common ways that customers request designs directly through Trello by sharing
          Google docs or even recording a short video in a Telegram group.
          Basically, you can link to it or share it in Trello.
        </div>
      </el-collapse-item>
      <el-collapse-item title="What if I don't like the design?" name="8">
        <div>No worries! We'll continue to revise the design until you're 100% satisfied.</div>
      </el-collapse-item>
      <el-collapse-item title="What design work we can do ?" name="9">
        <div>Each project is different, and the complexity is different too, but here is the list of services that we
          can do:
        </div>
        <div>Logo Design</div>
        <div>Branding x Identity</div>
        <div>Product Design</div>
        <div>Amazon Content</div>
        <div>Animated graphics (GIFS, etc.)</div>
        <div>Lottie Animation</div>
        <div>Intro Animation</div>
        <div>Commercial Animation</div>
        <div>Social Media Graphics</div>
        <div>Blog Graphics</div>
        <div>Banners x Billboards</div>
        <div>Books Cover x Illustrations</div>
        <div>Packaging Design</div>
        <div>Merch Design</div>
        <div>Jewelry Design</div>
        <div>UI / UX Design</div>
        <div>Webflow</div>
        <div>3D Modeling</div>
        <div>3D Sculpting</div>
        <div>3D Rendering</div>
      </el-collapse-item>
      <el-collapse-item title="What if I only have a single request?" name="10">
        <div>That's fine. You can pause your subscription when finished and return when you have additional design
          needs.
        </div>
        <div>There's no need to let the remainder of your subscription go to waste.</div>
      </el-collapse-item>
      <el-collapse-item title="Are there any refunds if I don't like the service?" name="11">
        <div>Due to the high quality nature of the work, there will be no refunds issued.</div>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'CollapseComponent',
  data() {
    return {
      activeName: ''
    };
  }
}
</script>