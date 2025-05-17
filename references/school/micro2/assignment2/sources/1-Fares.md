Abstract—Fast fashion is a highly competitive field of fashion,
where: frequent new trends, unexpected customer demand, and a
large inventory of items are the main features of the field. From
operations perspective, decision makers should demonstrate a
high responsiveness flexibility, so that they can be in line with the
fast fashion speed.
In this context, our main goal in this article is to present a
quick response business model: it is an operation mathematical
model, that allows international retailer to correct the initial
replenishment decisions, according to the market responsiveness
and the latest sales data, in order to re-define continuously and
dynamically the replenishment policies, in line with the fast
fashion market speed.
Our mathematical model is an integer linear program, that we
resolved using IBM Cplex optimizer. The model parameters are
explained; experimental results within several instances are
established and presented.
Keywords—Quick response, fast fashion, store transfer, supply
chain, operation management, apparel retail, optimization, modeling
I. INTRODUCTION
“Fast fashion” has been defined as “a business strategy that
aims to shrink the processes involved in the buying cycle and
lead times for getting new fashion products into stores, in order
to satisfy consumer demand at its peak” [2][3].
Due to the manufacturing features of the linear fashion
scheme [1], in apparel fast fashion, retailers should empower
an agile process, flexible to the demand elasticity.
With few historical data, and unpredictable customer
behavior, instant decisions and actions should be taken by
production and logistic teams, to meet consumer expectations.
Thus the customer feedback according to the presented
collection is a key success in retailer’s responsiveness that
should be injected in decision making processes.

In a work frame where trends are changing very quickly,
the inventory allocation, among the retailer network, is
considered one of the most crucial issues, especially for
companies that manage an extended network of stores.
In this article, we present a mathematical model, which
responds to the actual demand of customers. According to the
sales of each article in the each store, quick decisions are made
to re-organize the assortment proposal within the remaining
points of sales.
The rest of this paper is organized as follows. A literature
review on the quick response in the fashion retail industry is
presented in section 2. Section 3,4 and 5 describe respectively
the problem definition, suggest model presentation and the
model validation. The section 6 reports the experimental results
and model discussion. Finally, the conclusions and future
perspectives are given in section 7.
II. LITTERATURE REVIEW
Fast fashion subject was developed discussed largely in
press [4][5]. Quick response was a concept first developed by
Kurt Salmon Associates (KSA) in the US, who studied the US
apparel industry in a 1986 study, where they found that on
average it took 66 weeks for apparel product to get from
manufacturing into store, despite a total production time of
only 11 weeks [6][3]. Hence, it was revolutionized by many
international retailers, such as Zara, H&M, to emphasis on the
qualitative aspects of the retailing strategy.
Several works were done in this field to reflect the fast
fashion quick response concept, in the production, forecast and
supply chain challenges.
F.Caro is one of the most important references in this field.
He worked with Gallien to formulate a stochastic model for
sales forecasting on size basis, and developed a mixed-integer
program of the first model applied to every store in the
network, allowing computing store shipment quantities [7],
while he developed with Martínez-de-Albéniz an extension of
978-1-5386-4225-2/18/$31.00 ©2018 IEEE
Quick Response In Fast Fashion Retail: An
Optimization Supply Chain Responsiveness Model
Naila FARES* –Maria LEBBAR*,**– Najiba SBIHI*
* Analysis and modeling of smart systems laboratory. Mohammadia Engineering School, Rabat, Morocco
** Mines National Superior School of Rabat, Morocco
Naila.fares@gmail.com – lebbar@enim.ac.ma – sbihi@emi.ac.ma
Authorized licensed use limited to: Australian National University. Downloaded on May 11,2025 at 23:51:28 UTC from IEEE Xplore. Restrictions apply.
the competitive newsvendor model to investigate the impact of
quick response under competition [4].
Unpredictable customer behavior is the main issue of this
problematic; in this context, Cachon Swinny developed a
model of enhanced design, and strategic consumer behavior
[8].
Some recent works made the loop on the impact of quick
response effect on logistic and production flows:
• Iannone R. et al [9] treated the merchandise and
replenishment planning optimization problem for
fashion retail
• Nenni,M.E and al. worked on a review of demand
forecasting in the fashion industry[10]
• I. Safra Abdelmalek presented in her Phd thesis a
framework on forecast, planning and production,
where it focuses in season production decisions, and
the responsiveness actions in the industrial field [11].
The literature review led us to catch a specific part in the
supply chain, where we developed our research.
III. PROBLEM DEFINITION
Fast fashion retail companies focus their supply chain
analysis most likely on sales forecast and post inventory
control. Actually, within the fast fashion speed, a scientific
based tool of decisions revision, in term of inventory
distribution is a must, within the big data size and the hard
competitiveness.
FIG.1: UNIQLO BUSINESS MODEL – FEBRUARY 2018 UPDATED
(FIG.1) is an instance of fast fashion business model: it is
the case of UNIQLO [12], while it is similar to other brands
too. Our dynamic process model is a new node in supply chain
(mentioned with double arrows in the initial mock-up FIG.1),
as an intermediate analytic stand point between inventory
control and stores.
In this paper, we suggest a corrective process model of
initial replenishment decisions, which optimizes the inventory
distribution between stores, by defining the store transfer
assignments, based on an operation research model program,
and taking into consideration store operations constraints.
In this paper, the model is an extension of Giada
Martino[13] paper.
IV. THE SUGGESTED MODEL
Our model is referring to an international retailer, which
will allow him to re-organize the assortment, in each country,
within the regional stores network, by maximizing the profit.
The model is run for each country, on a weekly basis,
taking as input the last week sales data.
The nomenclature used in the model is reported in Table 1
as bellow:
 TABLE I. THE MODEL NOMENCLATURE
 i = 1…n Number of items
j = 1…m Number of stores
k = 1…K K refers to the number of store transfer
combinations : K =2∗ C୫
ଶ , and the
index k is referring to a single store
couple combination j1 j2, where:
jଵ ∈ [1, m], jଶ ∈ [1, m]and jଵ ≠ jଶ
t Week number
unc Sales uncertainty parameter : due to the
sales forecast uncertainty, sales follow a
uniform distribution, centered in the
transfer quantity sales ± unc
ݎ݌݅ Market price of the item i
ܴܽ݋ݕ݊ܦܽݐ݁݅ The date when the product i was
displayed in the rayon, accessible to
customers
MinSC The minimum value of the stock cover
parameter
MaxSC The maximum value of the stock cover
parameter
ݒݐܥ Variable transport cost
ݐܥ݂ Fixed transport cost
݀݅ݐݏ݆1 ,݆2 Distance from store j1 to store j2
ݎݐܽ݊ݏ௝ଵ ,௝ଶ Transfer quantity from store j1 to store j2
݅݊ݒ௝௜௧ Stock level of product i in store j at the
time range t
Authorized licensed use limited to: Australian National University. Downloaded on May 11,2025 at 23:51:28 UTC from IEEE Xplore. Restrictions apply.
ݏ௝௜௧ Sales of product i in the store j at the time
range t
Capacity The transfer capacity that total transfer
quantity should not exceed
• The revenue R is defined as (1) :
∀	k	 ∈ [1, K]:	R୩ = 	∑∑ ∑ ∗	pr୧ ୫
୩ୀଵ ୫
୨భୀଵ ୬
୧ୀଵ ∗
[trans୧୩ ∗ (1 − unc), trans୧୩ ∗ (1 + unc)]				(1)


• The Transport Cost is defined as (2) :
∀	k	 ∈ [1, K]:	Ct୩ = 	Ctf	 + 	Ctv ∗
∑∑ ∑ trans୧୩ ∗ 	dist୧୩ ୫
୩ୀଵ ୫
୨భୀଵ ୬
୧ୀଵ 	(2)	
• The operations manpower cost is defined as (3) :
∀	k	 ∈ [1, K]:	Cop୩ = ∑∑ ∑ trans୧୩ ∗ ୫
୩ୀଵ ୫
୨భୀଵ ୬
୧ୀଵ
	LeadTime ∗ HourlyLaborCost	(3)	
Where the lead time is the necessary time for collecting 1
item in the store, as per the store transfer, and the hourly labor
cost is the operation manpower cost per item.
• The stock cover :
The stock cover of an item i is defined as the remaining
period, when we can sell all the inventory of the item i, on the
basis of its sale on the last period, considering that it will not be
replenished.
Due to operation constraints, products can’t not be
merchandised and displayed in the rayon automatically after
shipment reception, they might be stocked temporarily in the
warehouse. Thus the shipment date is not significant for stock
cover calculation.
For this reason, we introduce the RayonDate[ij] variable,
attributed to each item.
Let’s consider that our time range is one week, the stock
cover formulation for a define store is as bellow:
௧௜௝ݒ݅݊ ∗ ௧௜௝ݏ = ௝௜ݎ݁ݒ݋ܥܿ݇݋ݐܵ
(actual	date − RayonDate୧୨)
7
				(4)
• According to the fast fashion retail stock turnover
speed, the limit maximum and minimum values of the
stock cover are defined
• The profit is define as :
∀	k	 ∈ [1, K]:	Profit୩ =	R୩ − (Ct୩ + Cop୩)			(5)
Profit = ෍ Profit୩
୏
୩ୀଵ
																			(6)
Knowing this, our integer linear program is defined as
bellow:
• Decision variables
- trans୧୨భ୨మ	while	jଵ ∈ [1, m], jଶ ∈ [1, m]	and	jଵ ≠ jଶ
• Objective function : Maximize Profit
• Subject to :
- Stock cover and capacity constraints:
∀	i ∈ [1, n], jଵ ∈ [1, m], jଶ ∈ [1, m]and	j1 ≠ j2:	
 trans୧୨భ୨మ ≥ 0	 ⟸ 	 StockCover୧୨భ ≥
MaxSC	and	StockCover୧୨మ ≤ Mi						(7)
 ∑ transij1j
2
୫
୧ୀଵ ≤ Capacity														(8)
- Inventory constraint :
			∀	i ∈ [1, n], jଵ ∈ [1, m] ∶	
෍ transij1j
2
୫
j
2ୀଵ
୨భஷ୨మ
≤ invij1
																				(9)
V. THE MODEL VALIDATION
The model is validated and programmed under IBM ILOG
Cplex software.
As per model validation purpose, we tested the model under
several instances.
The test instances are based on random data, inspired from
real industrial case studies. An extract of data set is shown in
bellow tables.
Authorized licensed use limited to: Australian National University. Downloaded on May 11,2025 at 23:51:28 UTC from IEEE Xplore. Restrictions apply.
TABLE II. INSTANCE EXAMPLE OF ITEMS INVENTORY ON STORE BASIS
The sales are taken on a weekly basis.
TABLE III. IN STORE DISTANCES DATA SET SAMPLE
The distance between stores was taken as per the routing
distances map, not on Euclidian parameters basis, for a better
study approximation.
VI. EXPERIMENTAL RESULTS AND MODEL DISCUSSION
We are going to explore and discuss the results of a retailer
data set instance, which has 5 stores in the country, and
working on 20 items. Results are presented in the bellow
figures.
FIG.2: TOTAL TRANSFER QUANTITY FROM EACH STORE, SUM
OF ALL ITEMS ON STORE BASIS
FIG.3: SAMPLE OF 3 ITEMS TRANSFER QUANTITY FOR EACH
COUPLE STORE TRANSFER COMBINATION
The value added of this work is detailed in bellow points:
• It is a corrective tool that helps the fast fashion
retailer to take quick action, based on analytic
program, to re-distribute the inventory by store
transfer for sales increasing. Treating the
problematic itself in a new operation research
work frame contribution; store transfer might be
done by some retailers, but it was not cited in
Felipe Caro overview paper [14], who is one of the
main references in this field, where he explored
the main research axis in fast fashion, and from
2015 date of that paper until now, no scientific
publication was done with the proposed manner, to
the best of our knowledge.
• Adding to the fact that this program increases
profit by selling the product in their new
destination transfer stores, where the sales are
highly requested, this program helps to free up
space in expedition stores, so that they can receive
new products and change the assortment
• The program is an analytic support tool, which
helps the retailer to establish the customer profile
of each store. For instance in (FIG. 3) item 19 is
highly requested in store 19. If the finding is
repetitive, a deep analysis of the product features
might contribute in building store 19 customers
profile.
• On the other hand, it is an indicator of the forecast
affinity of each store; a high transfer quantity from
a specific store in (FIG.2) for example, the sum of
store transfer from store 5 is more than 700. If this
finding is repetitive, merchandising and planning
teams have to collaborate in revising the store
forecast and sales potential analysis.
Authorized licensed use limited to: Australian National University. Downloaded on May 11,2025 at 23:51:28 UTC from IEEE Xplore. Restrictions apply.
• Finally, due the fluent program design, each
program of the 4 testing instances: (3stores,10
items), (3 stores 20 items), (5 stores, 10 items) and
(5 stores 20 items) is run on 2.55seconds. For 5
stores case, we extended the number of products
number up to 10 000, the program is executed
within 1min 29seconds.
VII. CONCLUSION AND PERSPECTIVES
A flexible approach of replenishment process correction has
been proposed to solve the crucial problem of unpredictable in
season sales in fast fashion retail sector. This more responsive
research method allows the retailers to enhance the knowledge
of each store needs and customer profiles, to refresh the blood
within stores network assortment by re-dispatch the inventory,
and to increase the total sales.
It is a decision support tool for in-season production of the
new models, on the basis of consumer feedback.
As perspectives of this article, potential future works may
focus on:
• Taking into consideration the price market changes,
that may occur during the season with discounts, and
ignore the assumption that they are fixed.
• Determining the optimum in season production
quantity of the new models.
• Supporting the customer profile definition decision
process, by using deep learning algorithms.
REFERENCES
[1] Hirscher.A.L, Niinimäki.K., C.M.Joyner Armstrong. 2018. Social
manufacturing in the fashion sector: New value creation through
alternative design strategies?. Journal of Cleaner Production. Volume 172
[2] Mo,Z. 2015. Internationalization Process of Fast Fashion Retailers:
Evidence of H&M and Zara. International Journal of Business and
Management; Vol. 10, No. 3; 2015
[3] Barnes, L., & Lea-Greenwood, G. (2006). Fast fashioning the supply
chain: Shaping the research agenda. Journal of Fashion Marketing and
Management, 10(1).
[4] Caro, F., V. Martínez-de-Albéniz. 2010. The impact of quick
response in inventory-based competition. Manufacturing Service
Oper. Management 12(3) 409–429.
[5] Foroohar, R. 2006. A new fashion frontier. Newsweek Internat. (March
20) http://www.newsweek.com/id/47044
[6] Čiarnienėa,R. and Vienažindienė,M. 2014. Agility and Responsiveness
Managing Fashion Supply Chain. Procedia - Social and Behavioral
Sciences 150 ( 2014 ) 1012 -- 1019. Elsevier.
[7] Caro, F., J. Gallien. 2010. Inventory management of a fast-fashion
 retail network. Oper. Res. 58(2) 257–273
[8] Cachon,G.P. Swinney,R. 2011. The Value of Fast Fashion: Quick
Response, Enhanced Design, and Strategic Consumer Behavior.
MANAGEMENT SCIENCE. Vol. 57, No. 4, April 2011, pp. 778–795.
Informs.
[9] Iannone R. et al. 2013. Merchandise and Replenishment Planning
Optimisation for Fashion Retail. International Journal of Engineering
Business Management · September 2013
[10] Nenni,M.E.,Giustiniano,L. and Pirolo,L. 2013. Demand Forecasting in
the Fashion Industry: A Review. International Journal of Engineering
Business Management. Special Issue on Innovations in Fashion Industry
[11] Safra, I. Vers une approche integrée de gestion de planification de la
production et de la distribution : cas de l'industrie textile.2013.Thèse
doctorale, ÉCOLE CENTRALE DES ARTS ET MANUFACTURES«
ÉCOLE CENTRALE PARIS », ÉCOLE NATIONALE D’INGÉNIEURS
DE TUNIS « ENIT »
[12] An article in fast retailing website, last updated on website on Feb 28th
2018 and took from the website on March 19th 2018.
http://www.fastretailing.com/eng/group/strategy/uniqlobusiness.html
[13] Martino, G., Yuce, B., Iannone, R., & Packianather, M. S. (2016).
Optimisation of the replenishment problem in the Fashion Retail Industry
using Tabu-Bees algorithm. IFAC-PapersOnLine, 49(12), 1685-1690.
[14] Caro, F., & Martínez-de-Albéniz, V. 2015. Fast fashion: business model
overview and research opportunities. In Retail supply chain
management (pp. 237-264). Springer, Boston, MA.
Authorized licensed use limited to: Australian National University. Downloaded on May 11,2025 at 23:51:28 UTC from IEEE Xplore. Restrictions apply. 